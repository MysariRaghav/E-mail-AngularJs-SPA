/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject=['$location', '$routeParams'];
    var showMsgController= function ($location, $routeParams) {

            alert($routeParams.id);

    };
    showMsgController.$inject=inject;

    angular.module('loginAngular').controller('showMsgController', showMsgController);

}());