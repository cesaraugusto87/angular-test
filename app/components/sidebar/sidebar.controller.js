/**
 * Created by cesar on 20/10/2016.
 */
'use strict';

angular.module('rappiTest')
    .controller('SidebarCtrl', ['$scope','DataSource','$uibModal',function($scope,DataSource,$uibModal) {
        DataSource.getData(function(data){
            $scope.categories = data.categories;
        });
        $scope.car = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '../catalog/modal-cart.html',
                controller: 'ModalCarDetailsCtrl',
                size: 'md',
                resolve: {}
            });

            modalInstance.result.then(function (widgetConf) {
                $scope.widgetscontent = widgetConf;
            }, function () {
            });
        }
    }]);