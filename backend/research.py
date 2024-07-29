import yfinance as yf
import matplotlib.pyplot as plt
import pandas as pd

class Stock_research:

    @staticmethod
    def stock_graph(stock_name: str, start_date: str, end_date: str):
        """Graph of the stock performance"""
        # Fetch historical data for the stock
        stock = yf.Ticker(stock_name)
        hist = stock.history(start=start_date, end=end_date)
        
        # Ensure the index is a datetime index for plotting
        hist.index = pd.to_datetime(hist.index)
        
        # Plot the stock performance
        plt.figure(figsize=(10, 5))
        plt.plot(hist.index, hist['Close'])
        plt.title(f'{stock_name} Performance Over Time')
        plt.xlabel('Date')
        plt.ylabel('Stock Price ($)')
        plt.grid(True)
        plt.show()
        return
    
    def get_cashflow(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.cashflow 
    
    def get_info(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info
    
    def get_news(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.news
    
    def get_sector(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['sector', 'Sector information not available']
    
    def get_summary(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['longBusinessSummary', 'Business summary not available at the moment']
    
    def get_curr_price(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['currentPrice']
    
    def get_open(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['open']
    
    def get_daylow(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['dayLow']
    
    def get_daylow(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['dayHigh']
    
    def get_mrkt_cap(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['marketCap']
    
    def get_beta(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['beta']
    
    
    

    

stock_name = 'AAPL'
# Stock_research.stock_graph(stock_name, '2021-01-01', '2022-01-01')

# print(Stock_research.get_cashflow(stock_name))
# print(Stock_research.get_news(stock))
# print(Stock_research.get_summary(stock_name))
print(Stock_research.get_info(stock_name))
print(Stock_research.get_mrkt_cap(stock_name))