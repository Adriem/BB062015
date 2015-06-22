app.service('BeerService', function ($http) {

    return ({
        load: load,
        submit: submit
    });

    function load() {
        return $http.get("./data/beers.json");
    }

    function submit(beer) {
        return $http.post("http://localhost:8080/beers/api/submit", JSON.stringify(beer));
    }
});