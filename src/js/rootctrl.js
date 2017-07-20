/**
 * Created by 13314 on 2017/7/19.
 */

var app = angular.module('myApp', ['ng', 'ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/start', {
            templateUrl: 'views/start.html'
        })
        .when('/login', {
            templateUrl: 'views/login/login.html'
        })
        .when('/regist', {
            templateUrl: 'views/regist/regist.html'
        })
        .otherwise({
            redirectTo: '/start'
        });
}).controller('rootCtrl', function ($scope, $location) {
    $scope.login = function(url) {
        $location.path(url);
    };
    $scope.regist = function(url) {
        $location.path(url);
    };
});
