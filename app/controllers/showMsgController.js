/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject=['$scope', '$rootScope', '$location', '$routeParams'];
    var showMsgController= function ($scope, $rootScope, $location, $routeParams) {

        var messages= $rootScope.userProfile.messages;

        $scope.message= messages.find(function(i){
            return i.id == $routeParams.id;
        })


        $scope.send= function () {

           $location.path('/messages')

        }


        console.log($scope.message+" adf");
    };
    showMsgController.$inject=inject;

    angular.module('loginAngular').controller('showMsgController', showMsgController);

}());