/**
 * Created by ragha on 1/27/2017.
 */

(function () {


    var registerController= function ($scope, $window, $location, registerUser) {
        //$window.alert("Hello");

        $scope.matchPassword= function () {

            if ($scope.password !== $scope.confPassword)
                $scope.pass_err = "Password does't match";
            else
                $scope.pass_err = "";

        }

        $scope.register= function () {
            //alert($scope.email);
            var users = registerUser.storeUser($scope.username, $scope.lname, $scope.fname, $scope.email,
                $scope.phone, $scope.location, $scope.password, $scope.confPassword);
            $location.path('/');

        }
    };

    registerController.$inject=['$scope','$window', '$location' ,'registerUser'];
    angular.module("loginAngular").controller("registerController", registerController);
}());