app.directive('sidebar', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/sidebar.html',
        controller: 'NavbarCtrl'
    };
});
