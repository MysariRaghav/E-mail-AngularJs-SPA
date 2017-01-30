/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var welcomeController= function ($scope, $location) {

        $scope.connect= function (path) {
            $location.path(path);
            
        }


    };
    welcomeController.$inject=['$scope','$location'];

    angular.module('loginAngular').controller('welcomeController', welcomeController);

}());