from flask import Flask, request
from flask.ext.cors import CORS

from model import Beer

app = Flask(__name__)
cors = CORS(app, resources=r'/api/*', allow_headers='Content-Type')
# app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/beers', methods=['GET'])
def list_beer():
    return Beer.jsonify()


@app.route('/api/beer', methods=['POST'])
def post_beer():
    print request.get_json()
    Beer.parse_dir(request.get_json()).save()
    return "Done"


if __name__ == '__main__':
    if len(Beer.objects) == 0:
        Beer.populate()

    app.run()