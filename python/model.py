import json

import mongoengine as me

me.connect('BB062815')


class Beer(me.Document):
    name = me.StringField(required=True)
    img = me.StringField(required=True)
    details = me.StringField(required=True)
    provenance = me.StringField(required=True)
    vol = me.FloatField(required=True)

    @staticmethod
    def parse_dir(dir):
        some_beer = Beer()
        some_beer.name = dir['name']
        some_beer.img = dir['img']
        some_beer.details = dir['details']
        some_beer.provenance = dir['provenance']
        some_beer.vol = float(dir['vol'])
        return some_beer

    @staticmethod
    def populate():
        with open("beers.json") as data_file:
            data = json.load(data_file)

        for d in data['data']:
            beer = Beer.parse_dir(d)
            print "Populating database:", beer.name
            beer.save()

    @staticmethod
    def __parse_beer(beer):
        beer._data.pop('id', None)
        return beer._data

    @staticmethod
    def jsonify():
        data = {'data': map(Beer.__parse_beer, Beer.objects)}
        return json.dumps(data)


