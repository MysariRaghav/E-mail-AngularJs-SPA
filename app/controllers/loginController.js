/**
 * Created by ragha on 1/27/2017.
 */
(function () {

    var inject=['$scope', '$rootScope', 'validateUser','$location'];
    var loginController= function ($scope, $rootScope, validateUser,$location) {

        $scope.login= function () {
            var userProfile= validateUser.getUser($scope.username);
            $rootScope.username= $scope.username;
            //$rootScope.password= $scope.password;
            if(userProfile && userProfile.password===$scope.password){
                $location.path('/welcome');
            }
        }

    }

    loginController.$inject= inject

    angular.module("loginAngular").controller("loginController", loginController);
}());