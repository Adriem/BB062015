app.controller('SidebarCtrl', function($scope,$location){

    $scope.opened = false;

    $scope.toggleSidebar = function(){
        $scope.opened = !$scope.opened;
    };

    $scope.isActive = function(path){
        return $location.path() == path;
    };

    /**
     * Esto se podría hacer mejor si la sidebar fuesen <a> en lugar de <div>
     */
    $scope.goToCode = function () {
        window.location.href = "http://github.com/RecuencoJones/BB062015";
    };
});
