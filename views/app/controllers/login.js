/* global angular */
angular.module('instabeer').controller('loginCtrl', function($scope) {
    $scope.title = 'login';
    $scope.account = {
        user: '',
        password: ''
    }
    
    $scope.submitForm = function(){
        console.log($scope.account);
    }
});