app.controller('SidebarCtrl', function($scope,$location){

    $scope.opened = false;

    $scope.toggleSidebar = function(){
        $scope.opened = !$scope.opened;
    };

    $scope.isActive = function(path){
        return $location.path() == path;
    };

    $scope.goToCode = function () {
        window.location.href = "http://github.com/RecuencoJones/BB062015";
    };
});
