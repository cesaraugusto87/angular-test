'use strict';

angular.module('rappiTest')
    .controller('CatalogCtrl', ['$scope','DataSource','$uibModal','$routeParams','lodash','userCart','SweetAlert',
        function($scope,DataSource,$uibModal,$routeParams,lodash,userCart,SweetAlert) {
            $scope.categories = [];
            $scope.products = [];
            $scope.Filter = {};
            $scope.userFilter = 'all';
            $scope.userOrder = 'none';

            DataSource.getData(function(data){
                lodash.forEach(data.products, function(product){
                    product.price = parseFloat(product.price);
                });

                if($routeParams.idCategory) {
                    $scope.categories.push(lodash.find(data.categories, function (category) {
                        if(category.categori_id == $routeParams.idCategory)
                            return category;
                    }));

                    lodash.forEach(data.products, function (product) {
                        if(lodash.find(product.categories, function(cat){
                                return cat == $routeParams.idCategory})){
                            $scope.products.push(product);
                        }
                    });
                }
                else {
                    $scope.categories = data.categories;
                    $scope.products = data.products;
                }
            });

            $scope.addtoCart = function (item){
                userCart.addProducts(item);
                SweetAlert.swal('Carrito', 'Producto Agregado Satisfactoriamente', "success");
            };

            $scope.change = function(){
                if($scope.userFilter == 'all')
                    $scope.Filter = {};
                if($scope.userFilter == 'available')
                    $scope.Filter = {
                        available: true
                    };
                if($scope.userFilter == 'notAvailable')
                    $scope.Filter = {
                        available: false
                    };
                if($scope.userFilter == 'best_seller')
                    $scope.Filter = {
                        best_seller: true
                    };
                if($scope.userOrder == 'name')
                    $scope.Order = 'name';
                if($scope.userOrder == 'upperPrice')
                    $scope.Order = '-price';
                if($scope.userOrder == 'lowerPrice')
                    $scope.Order = 'price'
            };

            $scope.showDetails = function(id) {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: '../catalog/modal-product-detail.html',
                    controller: 'ModalProductDetailsCtrl',
                    size: 'md',
                    resolve: {
                        id: function() {
                            return id;
                        }
                    }
                });

                modalInstance.result.then(function (widgetConf) {
                    $scope.widgetscontent = widgetConf;
                }, function () {
                });
            };

        }])

    .controller('ModalProductDetailsCtrl',['$scope','DataSource','id','lodash','$uibModalInstance','userCart','SweetAlert'
        ,function($scope,DataSource,id, lodash, $uibModalInstance,userCart,SweetAlert){
            $scope.item = {};
            DataSource.getData(function(data){
                lodash.forEach(data.products, function(product){
                    product.price = parseFloat(product.price);
                });
                $scope.products = data.products;
                $scope.item =lodash.find($scope.products, function(product){
                    return product.id == id;
                })
            });

            $scope.addtoCart = function (item){
                userCart.addProducts(item);
                SweetAlert.swal('Carrito', 'Producto Agregado Satisfactoriamente', "success");
            };
            $scope.close = function(){
                $uibModalInstance.dismiss('cancel');
            }


        }]);