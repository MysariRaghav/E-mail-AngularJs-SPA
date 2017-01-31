/**
 * Created by ragha on 1/27/2017.
 */
(function () {

    var inject=['$scope', '$rootScope', 'validateUser','$location', '$cookies'];
    var loginController= function ($scope, $rootScope, validateUser,$location, $cookies) {

        $scope.login= function () {
            var userProfile= validateUser.getUser($scope.username);
            $cookies.put('username', $scope.username);
            //$rootScope.password= $scope.password;
            if(userProfile && userProfile.password===$scope.password){
                $location.path($rootScope.savedLocation);
                $cookies.put('authenticated', true);
                alert("Heeeeeeeeeeeeeeeeeeeeeeeee");
                $rootScope.savedLocation= null;
            }
        }

    }

    loginController.$inject= inject

    angular.module("loginAngular").controller("loginController", loginController);
}());