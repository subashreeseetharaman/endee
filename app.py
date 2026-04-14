from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Load dataset
with open('data/notes.json') as f:
    notes = json.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_query = request.json['question'].lower()
    response = "Sorry, I couldn't find an answer."

    for item in notes:
        if item["keyword"] in user_query:
            response = item["answer"]
            break

    return jsonify({"answer": response})

if __name__ == '__main__':
    app.run(debug=True)