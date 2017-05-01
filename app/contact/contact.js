'use strict';

angular.module('rappiTest')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl'
  });
}])