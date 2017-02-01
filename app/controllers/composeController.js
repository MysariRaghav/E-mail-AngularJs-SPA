/**
 * Created by ragha on 1/31/2017.
 */
(function () {

    var inject=['$rootScope', '$scope', '$location'];
    var composeController= function ($rootScope, $scope, $location) {
       //$rootSscope.messages = [];
        //$location.path('/');
        $scope.send= function () {
        //console.log($scope.message_now);
        console.log($rootScope.messages);
        message = {};
        //message.id
        message.sender = $scope.sender;
        message.subject = $scope.subject;
        //message.date = $scope.date;
        message.recipients = $scope.recipients;
        message.message = $scope.message;

        $rootScope.messages.push(message);

        $location.path('/messages');

}


    };
    composeController.$inject=inject;

    angular.module('loginAngular').controller('composeController', composeController);

}());