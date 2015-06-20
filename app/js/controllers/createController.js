app.controller('CreateCtrl',function($scope,$http){

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
            if (validate($scope.beer[key])) {
                showErrorFeedback(key);
            }
        });

        if ($scope.errors.name||$scope.errors.details||$scope.errors.img||$scope.errors.provenance||$scope.errors.vol) {
            console.log($scope.errors);
            return;
        }
        console.log($scope.beer);

        $http.post("http://localhost:8080/beers/api/submit", JSON.stringify(beer))
            .success(function(){
                alert("Beer successfully added!");
                window.location.href= 'index.html';
            })
            .fail(function(){
                alert("Error submitting beer");
            });
    }
});
