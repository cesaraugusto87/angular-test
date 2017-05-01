'use strict';

// Declare app level module which depends on views, and components
var rappiTest = angular.module('rappiTest', [
    'ngCookies',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.bootstrap',
    'ngResource',
    'ngLodash',
    'oitozero.ngSweetAlert'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
        .otherwise({
            redirectTo: '/home'
        });
}]);

rappiTest.controller('LayoutController', function () {

});
