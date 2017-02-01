/**
 * Created by ragha on 1/27/2017.
 */
(function () {

    var inject=['$scope', '$rootScope', 'validateUser','$location', '$cookies'];
    var loginController= function ($scope, $rootScope, validateUser,$location, $cookies) {

        $scope.$invalid= true;
        $scope.userValueEntered= function () {

           // alert("User");

            $scope.$invalid= false;
        }

        $scope.passValueEntered= function () {

           // alert("pass");
            /*$scope.my_lgn.$invalid= false;*/
            $scope.$invalid= false;
        }

        $scope.login= function () {
            var userProfile= validateUser.getUser($scope.username);
            $scope.$invalid= true;
            $cookies.put('username', $scope.username);
            //$rootScope.password= $scope.password;
            if(userProfile && userProfile.password===$scope.password){
                $location.path($rootScope.savedLocation);
                $cookies.put('authenticated', true);
                alert("Heeeeeeeeeeeeeeeeeeeeeeeee");
                $rootScope.savedLocation= null;
                $rootScope.userProfile= userProfile;
                $scope.my_lgn.password.$setValidity("passValid", true);
                $scope.my_lgn.username.$setValidity("userValid", true);
                console.log($rootScope.userProfile.messages);
            }
            else if(!userProfile)
            {
                $scope.my_lgn.username.$setValidity("userValid", false);
                $scope.my_lgn.password.$setValidity("passValid", true);
            }
            else{
                $scope.my_lgn.password.$setValidity("passValid", false);
                $scope.my_lgn.username.$setValidity("userValid", true);
            }
        }

    }

    loginController.$inject= inject

    angular.module("loginAngular").controller("loginController", loginController);
}());