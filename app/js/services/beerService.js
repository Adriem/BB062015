app.service('BeerService', function ($http) {

    return ({
        load: load,
        submit: submit
    });

    function load() {
        return $http.get("http://localhost:5000/api/beers");
    }

    function submit(beer) {
        return $http.post("http://localhost:5000/api/beer", JSON.stringify(beer));
    }
});