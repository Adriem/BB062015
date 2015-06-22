var app = angular.module('BeersApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'MainCtrl'
        })

        .state('create', {
            url: '/create',
            templateUrl: 'templates/create.html',
            controller: 'CreateCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html'
        });

    $urlRouterProvider.otherwise('home');
});