/**
 * Created by ragha on 1/27/2017.
 */

(function () {

    var inject= ['$scope','$window', '$location' ,'registerUser', 'util'];
    var registerController= function ($scope, $window, $location, registerUser, util) {
       // $window.alert("Hellooooooooooooooooooooooooooooo");

        $scope.userExists= function () {

            var users= registerUser.getUsers();

            $scope.my_form.usernamesignup.$setValidity("user_exists", !util.containsUserInArray($scope.username, users));
        }



        $scope.matchPassword= function () {
            $scope.my_form.passignup_confirm.$setValidity("pass_err", $scope.password === $scope.confPassword);
        }

        $scope.register= function () {
            var users = registerUser.storeUser($scope.username, $scope.lname, $scope.fname, $scope.email,
                $scope.phone, $scope.location, $scope.password, $scope.confPassword);

            $location.path('/');

        }
    };

    registerController.$inject= inject;
    angular.module("loginAngular").controller("registerController", registerController);
}());