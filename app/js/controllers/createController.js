app.controller('CreateCtrl',function($scope,$state,BeerService){

    $scope.beer = {};

    $scope.send = function(){

        $scope.errors = {};
        var keys = ["name", "details", "img", "provenance", "vol"];

        function validate(value){
            return (value == undefined || value.trim() == "");
        }

        function showErrorFeedback(field){
            $scope.errors[field] = true;
        }

        keys.forEach(function(key){
            if (validate($scope.beer[key].toString())) {
                showErrorFeedback(key);
            }
        });

        if ($scope.errors.name||$scope.errors.details||$scope.errors.img||$scope.errors.provenance||$scope.errors.vol) {
            console.log($scope.errors);
            return;
        }
        console.log($scope.beer);

        BeerService.submit($scope.beer)
            .success(function () {
                console.log("Beer successfully added!");
                $state.go('home');
            });
    }
});
