'use strict';

angular.module('rappiTest')

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/catalog/', {
            templateUrl: 'catalog/catalog.html',
            controller: 'CatalogCtrl'
          })
          .when('/catalog/:idCategory', {
            templateUrl: 'catalog/catalog.html',
            controller: 'CatalogCtrl'
          });
    }]);