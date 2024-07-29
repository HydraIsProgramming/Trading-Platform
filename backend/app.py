# app.py
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/data', methods=['POST'])
def get_data():
    data = request.json
    response = {
        'message': 'Data received successfully',
        'data': data
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)