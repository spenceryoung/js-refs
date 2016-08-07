var app = angular.module('MyApp', [
    'ngRoute',
    'MyApp.controllers',
    'MyApp.directives'
]);

app.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/one', {
            templateUrl: 'partials/one.html',
            controller: 'OneCtrl'
        })
        .when('/two', {
            templateUrl: 'partials/two.html',
            controller: 'TwoCtrl'
        })
        .otherwise({
            redirectTo: '/one'
        });
    }
]);