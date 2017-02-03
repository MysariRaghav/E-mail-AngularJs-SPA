/**
 * Created by ragha on 2/2/2017.
 */
(function () {

    var inject= ['$rootScope'];
    var messageService= function ($rootScope) {

        this.updateMessages= function (messages) {

            if (window.localStorage && messages) {
                localStorage.setItem("message_"+ $rootScope.userProfileId, angular.toJson(messages));
            }
        }

    }

    messageService.$inject= inject;

    angular.module('loginAngular').service('messageService', messageService)
}())