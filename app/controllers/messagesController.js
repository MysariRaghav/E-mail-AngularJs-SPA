/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject= ['$scope', '$location'];
    var messagesController= function ($scope, $location) {


        $scope.messages = [{
            id: 0,
            sender: 'santhosh@hotmail.com',
            subject: 'Hello sir, regarding $routeService',
            date: 'Apr 15, 2016 ',
            recipients: ['fancy998@gmail.com'],
            message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block. '
            +' It goes something like this pseudo-code. '+' Directives extend HTML syntax, and are the way to associate behavior and DOM transformations with custom elements and attributes. Through them, you can create reusable UI components, configure your application, and do almost anything else you can imagine wanting to do in your UI template.'
        }, {
            id: 1,
            sender: 'santhosh@hotmail.com',
            subject: 'Hello sir, regarding $routeService',
            date: 'Apr 15, 2016 ',
            recipients: ['fancy998@gmail.com'],
            message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block'
            +'It goes something like this pseudo-code.'
        },{
            id: 2,
            sender: 'santhosh@hotmail.com',
            subject: 'Hello sir, regarding $routeService',
            date: 'Apr 15, 2016 ',
            recipients: ['fancy998@gmail.com'],
            message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block'
            +'It goes something like this pseudo-code.'
        },
            {
                id:3,
                sender: 'santhosh@hotmail.com',
                subject: 'Hello sir, regarding $routeService',
                date: 'Apr 15, 2016 ',
                recipients: ['fancy998@gmail.com'],
                message: 'You create routes in your application by calling functions on the $routeProvider service as a configuration block'
                +'It goes something like this pseudo-code.'
            }];


    };
    messagesController.$inject= inject;

    angular.module('loginAngular').controller('messagesController', messagesController);

}());