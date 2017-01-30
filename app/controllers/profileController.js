/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject = ['$scope', '$rootScope', 'validateUser', '$location', 'validation'];
    var profileController= function ($scope, $rootScope, validateUser, $location, validation) {

        //alert("Hello");
        var userProfile= validateUser.getUser($rootScope.username);
        $scope.username= userProfile.username;
       // console.log($scope.username);
        $scope.lname= userProfile.lname;
        $scope.fname= userProfile.fname;
        $scope.email= userProfile.email;
        $scope.phone= userProfile.phone;
        $scope.location= userProfile.location;
        $scope.password= userProfile.password;

        $scope.userExists= validation.userExists;
        $scope.matchPassword= validation.matchPassword;

        $scope.update= function () {
            userProfile.username= $scope.username;
            userProfile.lname= $scope.lname;
            userProfile.fname= $scope.fname;
            userProfile.email= $scope.email;
            userProfile.phone= $scope.phone;
            userProfile.location= $scope.location;
            userProfile.password= $scope.password;
            userProfile.confPassword= $scope.confPassword;

            /*var users = registerUser.updateUser($scope.username, $scope.lname, $scope.fname, $scope.email,
                $scope.phone, $scope.location, $scope.password, $scope.confPassword);*/

            $location.path('/');

        }

    };
    profileController.$inject= inject;

    angular.module('loginAngular').controller('profileController', profileController);

}());