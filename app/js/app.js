var app = angular.module('BeersApp', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    /**
     * stateProvider define cada uno de los estados
     * v�lidos de la aplicaci�n, asignando una url,
     * una template HTML y un controlador JS
     */
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

    /**
     * urlRouterProvider evida que se pueda acceder a estados
     * inexistentes y redirige a la p�gina principal
     */
    $urlRouterProvider.otherwise('home');
});