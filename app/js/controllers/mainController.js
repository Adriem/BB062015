app.controller('MainCtrl', function ($scope, $http) {

    $scope.beerList = [];

    $http.get("./data/beers.json")
        .success(function (data) {
            $scope.beerList = data.data;
        })
        .error(function () {
            console.log("Error in the network");
        });
});
