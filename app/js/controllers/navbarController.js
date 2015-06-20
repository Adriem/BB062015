app.controller('NavbarCtrl', function($scope,$location){

    $('#home-handler').click(function() {
        window.location.href= 'index.html';
    });

    $scope.toggleSidebar = function(){
        $('.sidebar').toggleClass('sidebar-active',1000,"swing");
        $('.view').toggleClass('view-not-active',1000,"swing");
    };

    $scope.isActive = function(path){
        return $location.path() == path;
    };

    $('#create-handler').click(function () {
        window.location.href= 'create.html';
    });

    $('#about-handler').click(function () {
        window.location.href= 'about.html';
    });

    $('#code-handler').click(function () {
        window.location.href = "http://github.com/RecuencoJones/BB062015";
    });
});
