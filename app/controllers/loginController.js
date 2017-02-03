/**
 * Created by ragha on 1/27/2017.
 */
(function () {

    var inject=['$scope', '$rootScope', 'validateUser','$location', '$cookies'];
    var loginController= function ($scope, $rootScope, validateUser,$location, $cookies) {

        $scope.$invalid= true;
        $scope.userValueEntered= function () {
            $scope.$invalid= false;
        }

        $scope.passValueEntered= function () {
            $scope.$invalid= false;
        }

        $scope.login= function () {
            var userProfile= validateUser.getUser($scope.username);
            console.log(userProfile)
            $scope.$invalid= true;
            $cookies.put('username', $scope.username);
            //$rootScope.password= $scope.password;
            if(userProfile && userProfile.password===$scope.password){
                $cookies.put('authenticated', true);

                //$rootScope.userProfile= userProfile;
                $rootScope.userProfileId= userProfile.id;
                $rootScope.messages= angular.fromJson(localStorage.getItem("message_"+(userProfile.id )))

                $scope.my_lgn.password.$setValidity("passValid", true);
                $scope.my_lgn.username.$setValidity("userValid", true);
                console.log($rootScope.messages);

                alert($rootScope.savedLocation)
                $location.path($rootScope.savedLocation);
                $rootScope.savedLocation= null;
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