app.controller('MainCtrl', function ($scope, BeerService) {

    $scope.beerList = [];

    /**
     * Cargamos las cervezas desde la API
     */
    BeerService.load()
        .success(function (data) {
            $scope.beerList = data.data;
        })
        .error(function () {
            console.log("Error in the network");
        });
});
