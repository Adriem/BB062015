app.controller('MainCtrl', function ($scope, BeerService) {

    $scope.beerList = [];

    BeerService.load()
        .success(function (data) {
            $scope.beerList = data.data;
        })
        .error(function () {
            console.log("Error in the network");
        });
});
