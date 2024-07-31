import yfinance as yf
import matplotlib.pyplot as plt
from datetime import datetime
import pandas as pd
import io
import base64

class Stock_research:

    @staticmethod
    def stock_graph(stock_name, period, interval):
        # Fetch historical data and plot the graph
        stock = yf.Ticker(stock_name)
        hist = stock.history(period=period, interval=interval)
        
        plt.figure(figsize=(10, 5))
        plt.plot(hist.index, hist['Close'], label='Close Price')
        plt.title(f'{stock_name} Stock Price')
        plt.xlabel('Date')
        plt.ylabel('Price ($)')
        plt.legend()

        # Save the figure to a BytesIO buffer
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        plt.close()
        buf.seek(0)

        # Encode the image in base64
        image_base64 = base64.b64encode(buf.read()).decode('utf-8')

        return f"data:image/png;base64,{image_base64}"
    
    #def get_cashflow(stock_name: str):
    #    """get cashflow for stock"""
    #    stock = yf.Ticker(stock_name)
    #    return stock.cashflow 
    
    def get_info(stock_name: str):
        """get a summary of stock information"""
        stock = yf.Ticker(stock_name)
        return stock.info
    
    def get_news(stock_name: str):
        """get news about the stock"""
        stock = yf.Ticker(stock_name)
        return stock.news
    
    def get_sector(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info.get('sector', 'Sector information not available')

    
    def get_summary(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info.get('longBusinessSummary', 'Business summary not available at the moment')
    
    def get_curr_price(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['currentPrice']
    
    def get_open(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['open']
    
    def get_daylow(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['dayLow']
    
    def get_dayhigh(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['dayHigh']
    
    def get_mrkt_cap(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['marketCap']
    
    def get_change_px_percentage(stock_name: str):
        stock = yf.Ticker(stock_name)
        open_price = stock.info['open']
        current_price = stock.info['currentPrice']

        if open_price is not None and current_price is not None:
            change_percentage = ((current_price - open_price) / open_price) * 100
            return change_percentage
        else:
            raise ValueError("Error: could not retrieve stock percentage change")
        return 
    
    def get_beta(stock_name: str):
        stock = yf.Ticker(stock_name)
        return stock.info['beta']