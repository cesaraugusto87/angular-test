'use strict';

angular.module('rappiTest')
    .controller('HomeCtrl', ['$scope','DataSource','$uibModal','userCart','SweetAlert','lodash'
        ,function($scope,DataSource,$uibModal,userCart,SweetAlert,lodash) {
            $scope.userFilter = 'all';
            $scope.userOrder = 'none';
            $scope.Filter = {};
            $scope.products = [];


            DataSource.getData(function(data){
                lodash.forEach(data.products, function(product){
                    product.price = parseFloat(product.price);
                });
                $scope.products = data.products;
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
                    $scope.Order = 'price';
                if($scope.userOrder == 'upper3')
                    $scope.products = [];
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
    .controller('ModalCarDetailsCtrl',['$scope','$uibModalInstance','userCart', function($scope,$uibModalInstance, userCart){

        $scope.products = userCart.getProducts();
        $scope.delete = function(item){
            userCart.deleteProducts(item);
        };
        $scope.close = function (){
            $uibModalInstance.dismiss('cancel');
        }
    }]);