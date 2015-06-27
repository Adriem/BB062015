app.controller('CreateCtrl',function($scope,$state,BeerService,Validation){

    $scope.beer = {};

    $scope.send = function(){

        $scope.errors = {};

        /**
         * Esta funcion actualiza el objeto de errores y los diversos ng-class que tenemos
         * en la vista de create.html se actualizan para mostrar feedback
         * @param field
         */
        function showErrorFeedback(field){
            $scope.errors[field] = true;
        }

        /**
         * Esta funcion trata de someter una nueva cerveza de no existir errores
         */
        function submitBeer(){
            Validation.hasErrors($scope.errors).then(function(){
                console.log($scope.beer);

                BeerService.submit($scope.beer)
                    .success(function () {
                        console.log("Beer successfully added!");
                        $state.go('home');
                    });
            }, function(){console.log("At least an error in the form was found")});

        }

        Validation.validate($scope.beer,showErrorFeedback).then(submitBeer);
    }
});
