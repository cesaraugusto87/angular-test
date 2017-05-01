/**
 * Created by CesarSanchez on 19/10/2016.
 */

'use strict';

angular.module('rappiTest')

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeCtrl'
            });

    }]);

angular.module('rappiTest')
    .factory('DataSource', function ($http, $q,$resource, $cookies) {
        if($cookies.get('url') == undefined){
            $cookies.put('url', '../components/data-source/data.json');
        }

        return $resource($cookies.get('url'),{ }, {
            getData: {method:'GET', isArray: false}
        });
    })
    .service('userCart', function(lodash) {
        var productList = [];

        var addProducts = function(item) {
            var control = false;
            lodash.forEach(productList, function(product, index){
                if(product.id == item.id){
                    control = true;
                    productList[index].quantity += 1;
                }
            });
            if(!control){
                item.quantity = 1;
                productList.push(item);
            }


        };

        var deleteProducts = function(item){
            productList.splice(productList.indexOf(item), 1);
        };

        var getProducts = function(){
            return productList;
        };
        var cleanProducts = function(){
            return productList = [];
        };

        return {
            addProducts: addProducts,
            getProducts: getProducts,
            deleteProducts: deleteProducts,
            cleanProducts: cleanProducts
        };

    });

