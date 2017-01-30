/**
 * Created by ragha on 1/27/2017.
 */
(function () {

    var inject=['$scope', '$rootScope', 'validateUser','$location'];
    var loginController= function ($scope, $rootScope, validateUser,$location) {

        $scope.login= function () {
            alert("in login function");
            var userProfile= validateUser.getUser($scope.username, $scope.password);
            $rootScope.username= $scope.username;
            $rootScope.password= $scope.password;
            if(userProfile){
                $location.path('/welcome');
            }
        }

    }

    loginController.$inject= inject

    angular.module("loginAngular").controller("loginController", loginController);
}());