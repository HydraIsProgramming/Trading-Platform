import yfinance as yf
from datetime import datetime
from portfolio import *
from research import *

class User:
    def __init__(self, name, pswd):
        self.name = name
        self.pswd = pswd
        self.portfolio = Portfolio()

    def login(self, name, pswd):
        """Log in user"""
        if self.name == name and self.pswd == pswd:
            return "Login successful"
        else:
            return "Login failed"
        
    def sign_up(self, name, pswd):
        """Create an account for new user"""
        
        return
    

customer = User("jjarrett", "zombie99")

customer.portfolio.buy_order(customer, "shop", 10)