var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'Views/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/Info', {
            templateUrl: 'Views/Info.html',
            controller: 'aboutController'
        })

});
