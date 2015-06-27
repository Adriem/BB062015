/**
 * Simple directiva para mostrar cada elemento de la lista de cervezas
 * Referenciado con <beer></beer>
 */
app.directive('beer', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/beer.html'
    }
});
