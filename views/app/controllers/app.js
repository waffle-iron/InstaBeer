/*global angular*/
var app = angular.module('instabeer', ['ngRoute','angularCSS']);


//Route provider for Angular Routing.
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, $provide) {
    $routeProvider.when('/', {
        templateUrl: '/partials/home.html',
        controller: 'homeCtrl',
        css: '/css/home.css'
    })
    .when('/login', {
        templateUrl: '/partials/login.html',
        controller: 'loginCtrl',
        css: '/css/login.css'
    })
    .when('/contact', {
        templateUrl: '/partials/contact.html',
        controller: 'contactCtrl',
        css: '/css/contact.css'
    })
    .when('/signup', {
        templateUrl: '/partials/signup.html',
        controller: 'signupCtrl',
        css: '/css/signup.css'
    })
    .otherwise({
        redirectTo: '/'
    });
    
    $locationProvider.html5Mode({
        enabled: true, 
        requireBase: false
    }).hashPrefix('!');
    
}]);