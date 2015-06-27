/**
 * Directiva más compleja para controlar el funcionamiento de la barra lateral
 * Referenciado con <sidebar></sidebar>
 */
app.directive('sidebar', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/sidebar.html',
        controller: 'SidebarCtrl'
    };
});
