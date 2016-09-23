var app = angular.module('app', ['ngRoute', 'ngMessages'])

.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
    })
    .when('/topic', {
        templateUrl: 'partials/topic.html'
    })
    .when('/showTopic/:id', {
        templateUrl: 'partials/showTopic.html'
    })
    .when('/answer/:id', {
        templateUrl: 'partials/answer.html'
    })
    .otherwise({
        redirectTo:'/'
    })
})
