/**
 * Created by ragha on 1/27/2017.
 */
(function () {
    var loginController= function ($scope, validateUser,$location) {

        $scope.login= function () {
            alert("in login function");
            validateUser.check($scope.username, $scope.password);
            if(validateUser.isvalid){
                $location.path('/welcome');
            }
        }

    }

    loginController.$inject=['$scope', 'validateUser','$location'];

    angular.module("loginAngular").controller("loginController", loginController);
}());