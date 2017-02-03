/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject= ['$rootScope', '$location','$scope'];
    var messagesController= function ($rootScope, $location,$scope) {

        /*console.log(typeof $rootScope.messages);
        console.log($rootScope.messages);*/
        $scope.openMail= function (path) {

            $location.path(path);
        }

        $scope.replyMessages = [{
            sender: 'santhosh@hotmail.com',
            subject: 'Hello sir, regarding $routeService',
            date: 'Apr 15, 2016 ',
            recipients: ['fancy998@gmail.com'],
            message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block. '
            +' It goes something like this pseudo-code. '+' Directives extend HTML syntax, and are the way to associate behavior and DOM transformations with custom elements and attributes. Through them, you can create reusable UI components, configure your application, and do almost anything else you can imagine wanting to do in your UI template.'
        }, {
            sender: 'santhosh@hotmail.com',
            subject: 'Hello sir, regarding $routeService',
            date: 'Apr 15, 2016 ',
            recipients: ['fancy998@gmail.com'],
            message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block'
            +'It goes something like this pseudo-code.'
        },{
            sender: 'santhosh@hotmail.com',
            subject: 'Hello sir, regarding $routeService',
            date: 'Apr 15, 2016 ',
            recipients: ['fancy998@gmail.com'],
            message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block'
            +'It goes something like this pseudo-code.'
        },
            {
                sender: 'santhosh@hotmail.com',
                subject: 'Hello sir, regarding $routeService',
                date: 'Apr 15, 2016 ',
                recipients: ['fancy998@gmail.com'],
                message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block'
                +'It goes something like this pseudo-code.'
            }];

        $scope.message_now = $rootScope.messages;


    };
    messagesController.$inject= inject;

    angular.module('loginAngular').controller('messagesController', messagesController);

}());