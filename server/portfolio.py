import yfinance as yf
import matplotlib.pyplot as plt
import pandas as pd

class Portfolio():
    def __init__(self):
        # initializing the portfolio class
        self.portfolio = {}
        self.balance = 10000
        self.costbasis = {}
    
    def get_portfolio(self):
        # return the portfolio
        return self.portfolio
    
    def get_balance(self):
        # return the cash balance
        return self.balance
    
    def get_cost_basis(self):
        # return the cost basis
        return self.costbasis
    
    def buy_order(self, stock_name: str, quantity: int):
        try:
            stock = yf.Ticker(stock_name.upper())
            order_value = stock.info['currentPrice'] * quantity
            if self.balance < order_value:
                return "Error: Insufficient funds"
            else:
                self.balance -= order_value
                if self.isin(stock_name) is True:
                    quantity = quantity + self.portfolio.get(stock_name.upper())
                    order_value = order_value + self.costbasis.get(stock_name.upper())
                self.portfolio.update({stock_name.upper(): quantity})
                self.costbasis.update({stock_name.upper(): order_value})

        except:
            print("Error: stock name is not valid")
        return f"Purchase of {stock_name} * {quantity} shares\nRemaining balance {self.balance}"
    
    def sell_order(self, stock_name: str, quantity: int):
        # method to sell a users current holding

        if self.isin(stock_name) is False: # check if user holds security
            return f"Error: User does not currently own shares of {stock_name.upper()}"
        
        stock_holding = self.portfolio.pop(stock_name.upper()) # get amount user is holding

        if quantity < 1: # check if quantity is less than 1
            return ("Quantity must be equal or greater than 1")
        elif quantity > stock_holding: # check if quantity is larger than current holdings
            return ("Quantity must be equal or less than current holdings")
        try:
            stock = yf.Ticker(stock_name.upper())
            order_value = stock.info['currentPrice'] * quantity
            # check if quantity is smaller than holding to adjust users holding
            if quantity < stock_holding:
                self.portfolio.update({stock_name.upper(): stock_holding - quantity})

            self.costbasis.update({stock_name.upper(): self.costbasis.get(stock_name.upper()) - order_value})
            self.balance += order_value
        except:
            return "Sale failed"
        return f"Sale of {stock_name} * {quantity} shares\nRemaining balance {self.balance}"
    
    def isin(self, stock_name: str):
        result = False
        if self.portfolio.get(stock_name.upper()):
            result = True
        return result
    
    def port_performance(self, start_date: str, end_date: str):
        # Fetch historical data for each stock in the portfolio
        historical_data = {}
        for stock_name, quantity in self.portfolio.items():
            stock = yf.Ticker(stock_name)
            hist = stock.history(start=start_date, end=end_date)
            historical_data[stock_name] = hist['Close'] * quantity
        
        # Create a DataFrame to hold the historical data
        df = pd.DataFrame(historical_data)
        
        # Calculate the portfolio value over time
        portfolio_value = df.mul(pd.Series(self.portfolio), axis=1).sum(axis=1)
        
        # Plot the portfolio performance
        plt.figure(figsize=(10, 5))
        portfolio_value.plot()
        plt.title('Portfolio Performance Over Time')
        plt.xlabel('Date')
        plt.ylabel('Portfolio Value ($)')
        plt.show()
        return 

    def display_portfolio():
        
        return

    
port = Portfolio()
print(port.buy_order("acb", 3))
print(port.buy_order("acb", 3))
print(port.get_cost_basis())
print(port.sell_order("acb", 2))
print(port.get_cost_basis())
print(port.port_performance('2023-01-01', '2024-01-01'))
print(port.get_portfolio())