app.service('BeerService', function ($http) {

    /**
     * Exponemos las funciones de nuestro servicio
     */
    return ({
        load: load,
        submit: submit
    });

    /**
     * Cargamos la lista de cervezas y dejamos que el controlador se encarga de manejar el dato devuelto
     * @returns {HttpPromise}
     */
    function load() {
        return $http.get("http://localhost:5000/api/beers");
    }

    /**
     * Creamos una nueva cerveza
     * @param beer el objeto de modelo que queremos enviar
     * @returns {HttpPromise}
     */
    function submit(beer) {
        return $http.post(
            "http://localhost:5000/api/beer",
            JSON.stringify(beer),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
});