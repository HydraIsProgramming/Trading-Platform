from flask import Flask, request, jsonify
from flask_cors import CORS
import research
import portfolio

app = Flask(__name__)
CORS(app)

# Initialize portfolio
user_portfolio = portfolio.Portfolio()

# Research Endpoints
@app.route('/research/summary', methods=['GET'])
def get_summary():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400
    summary = research.Stock_research.get_summary(stock_name)
    return jsonify({'summary': summary})

@app.route('/research/info', methods=['GET'])
def get_info():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400
    info = research.Stock_research.get_info(stock_name)
    return jsonify(info)

@app.route('/research/news', methods=['GET'])
def get_news():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400
    news = research.Stock_research.get_news(stock_name)
    return jsonify(news)

@app.route('/research/sector', methods=['GET'])
def get_sector():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400
    sector = research.Stock_research.get_sector(stock_name)
    return jsonify({'sector': sector})

@app.route('/research/price', methods=['GET'])
def get_price():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400
    price = research.Stock_research.get_curr_price(stock_name)
    return jsonify({'current_price': price})

@app.route('/research/graph', methods=['GET'])
def get_graph():
    stock_name = request.args.get('stock_name')
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    if not stock_name or not start_date or not end_date:
        return jsonify({'error': 'stock_name, start_date, and end_date are required'}), 400
    research.Stock_research.stock_graph(stock_name, start_date, end_date)
    return jsonify({'message': 'Graph generated successfully'})

# Portfolio Endpoints
@app.route('/portfolio', methods=['GET'])
def get_portfolio():
    return jsonify(user_portfolio.get_portfolio())

@app.route('/portfolio/balance', methods=['GET'])
def get_balance():
    return jsonify({'balance': user_portfolio.get_balance()})

@app.route('/portfolio/cost_basis', methods=['GET'])
def get_cost_basis():
    return jsonify(user_portfolio.get_cost_basis())

@app.route('/portfolio/beta', methods=['GET'])
def get_portfolio_beta():
    beta = user_portfolio.port_beta()
    return jsonify({'beta': beta})

@app.route('/portfolio/buy', methods=['POST'])
def buy_stock():
    data = request.json
    stock_name = data.get('stock_name')
    quantity = data.get('quantity')
    date = data.get('date')
    if not stock_name or not quantity or not date:
        return jsonify({'error': 'stock_name, quantity, and date are required'}), 400
    result = user_portfolio.buy_order(stock_name, quantity, date)
    return jsonify({'result': result})

@app.route('/portfolio/sell', methods=['POST'])
def sell_stock():
    data = request.json
    stock_name = data.get('stock_name')
    quantity = data.get('quantity')
    date = data.get('date')
    if not stock_name or not quantity or not date:
        return jsonify({'error': 'stock_name, quantity, and date are required'}), 400
    result = user_portfolio.sell_order(stock_name, quantity, date)
    return jsonify({'result': result})

@app.route('/portfolio/graph', methods=['GET'])
def get_portfolio_graph():
    start_date = request.args.get('start_date')
    end_date = request.args.get('end_date')
    if not start_date or not end_date:
        return jsonify({'error': 'start_date and end_date are required'}), 400
    user_portfolio.port_graph(start_date, end_date)
    return jsonify({'message': 'Graph generated successfully'})

if __name__ == '__main__':
    app.run(debug=True)

