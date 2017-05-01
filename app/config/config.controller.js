/**
 * Created by cesar on 23/10/2016.
 */
'use strict';

angular.module('rappiTest')
    .controller('ConfigCtrl', ['$scope','SweetAlert','$window','$cookies',
        function($scope,SweetAlert,$window,$cookies) {
            if($cookies.get('url') != '../components/data-source/data.json'){
                $scope.originType = 'remote';
                $scope.url = $cookies.get('url');
            }
            else{
                $scope.originType = 'local';
            }

            $scope.setLocal = function (){

                SweetAlert.swal({
                        title: 'Configuración',
                        text: '¿Desea Cambiar el Origen de Datos?',
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "green",
                        confirmButtonText: 'OK',
                        cancelButtonText: 'CANCELAR',
                        closeOnConfirm: true,
                        closeOnCancel: true
                    },
                    function (isConfirm) {
                        if (isConfirm) {
                            $cookies.put('url', '../components/data-source/data.json');
                            $window.location.reload();
                        }
                        else{

                        }
                    });
            };

            $scope.currentUrl = $cookies.get('url');
            $scope.setUrl = function (){
                SweetAlert.swal({
                        title: 'Configuración',
                        text: '¿Desea Cambiar el Origen de Datos?',
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "green",
                        cancelButtonColor: "red",
                        confirmButtonText: 'OK',
                        cancelButtonText: 'CANCELAR',
                        closeOnConfirm: true,
                        closeOnCancel: true
                    },
                    function (isConfirm) {
                        if (isConfirm) {
                            $cookies.put('url', $scope.url);
                            $window.location.reload();
                        }
                        else{

                        }
                    });

            }
        }]);