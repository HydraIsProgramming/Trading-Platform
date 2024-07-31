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

@app.route('/portfolio/holding', methods=['GET'])
def get_portfolio_holding():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400
    curr_price = research.Stock_research.get_curr_price(stock_name)
    change_percentage = research.Stock_research.get_change_px_percentage(stock_name)
    position = user_portfolio.get_stock_position(stock_name)
    ### get avg price using database
    cost_basis = user_portfolio.get_stock_cost_basis(stock_name)
    market_value = curr_price * position
    profit_loss = market_value - cost_basis
    return jsonify({
        'current_price': curr_price,
        'change_percentage': change_percentage,
        'position': position,
        'cost_basis': cost_basis,
        'market_value': market_value,
        'profit_loss': profit_loss
    })

@app.route('/research/stock_info', methods=['GET'])
def get_stock_information():
    stock_name = request.args.get('stock_name')
    if not stock_name:
        return jsonify({'error': 'stock_name is required'}), 400

    try:
        # Fetching stock information
        curr_price = research.Stock_research.get_curr_price(stock_name)
        change_percentage = research.Stock_research.get_change_px_percentage(stock_name)
        summary = research.Stock_research.get_summary(stock_name)
        market_cap = research.Stock_research.get_mrkt_cap(stock_name)
        sector = research.Stock_research.get_sector(stock_name)

        # Generate the daily chart and get it as a base64 string
        # daily_chart = research.Stock_research.stock_graph(stock_name, period="1d", interval="60m")
        return jsonify({
            'current_price': curr_price,
            'change_percentage': change_percentage,
            'summary': summary,
            'market_cap': market_cap,
            'sector': sector
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    

if __name__ == '__main__':
    app.run(debug=True)