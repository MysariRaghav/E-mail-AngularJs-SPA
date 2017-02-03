/**
 * Created by ragha on 1/27/2017.
 */

(function () {

    var inject= ['$scope','$window', '$location' ,'registerUser','validation'];
    var registerController= function ($scope, $window, $location, registerUser, validation) {
       // $window.alert("Hellooooooooooooooooooooooooooooo");

        $scope.userExists= validation.userExists;
        $scope.matchPassword= validation.matchPassword;

        $scope.register= function () {
            var users = registerUser.storeUser($scope.username, $scope.lname, $scope.fname, $scope.email,
                $scope.phone, $scope.location, $scope.password, $scope.confPassword);

            if (window.localStorage && users) {
                localStorage.setItem("message_"+(users.length - 1 ), angular.toJson([]));
                alert(localStorage.getItem("message_"+(users.length - 1 )))
                console.log(typeof localStorage.getItem("message_"+(users.length - 1 )))

            }

            $location.path('/');

        };

/*        $scope.userExists= function () {

            var users= registerUser.getUsers();

            $scope.my_form.usernamesignup.$setValidity("user_exists", !util.containsUserInArray($scope.username, users));
        }



        $scope.matchPassword= function () {
            $scope.my_form.passignup_confirm.$setValidity("pass_err", $scope.password === $scope.confPassword);
        }*/

    };

    registerController.$inject= inject;
    angular.module("loginAngular").controller("registerController", registerController);
}());