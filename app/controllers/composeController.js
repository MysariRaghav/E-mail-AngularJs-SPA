/**
 * Created by ragha on 1/31/2017.
 */
(function () {

    var inject=['$rootScope', '$scope', '$location', 'registerUser', 'messageService'];
    var composeController= function ($rootScope, $scope, $location, registerUser, messageService) {

        $scope.send= function () {

        message = {};
        message.id= $rootScope.messages.length;
        message.sender = $scope.sender;
        message.subject = $scope.subject;
        message.date = $scope.date;
        message.recipients = $scope.recipients;
        message.message = $scope.message;

        console.log($rootScope.messages);
        $rootScope.messages.push(message);
        messageService.updateMessages($rootScope.messages);
        //registerUser.updateUser($rootScope.userProfile);

        $location.path('/messages');

}


    };
    composeController.$inject=inject;

    angular.module('loginAngular').controller('composeController', composeController);

}());