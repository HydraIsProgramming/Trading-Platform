import yfinance as yf
from datetime import datetime
from backend.portfolio import *

class User:
    def __init__(self, name, pswd):
        self.name = name
        self.pswd = pswd
        self.portfolio = Portfolio()

    def login(self, name, pswd):
        if self.name == name and self.pswd == pswd:
            return "Login successful"
        else:
            return "Login failed"
        
    def sign_up(self, name, pswd):
        
        return
    

customer = User("jjarrett", "zombie99")

customer.portfolio.buy_order(customer, "shop", 10)