/**
 * Created by cesar on 23/10/2016.
 */
'use strict';

angular.module('rappiTest')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/config', {
            templateUrl: 'config/config.html',
            controller: 'ConfigCtrl'
        });
    }]);