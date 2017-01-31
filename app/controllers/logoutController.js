/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject=['$location', '$cookies'];
    var logoutController= function ($location, $cookies) {

        $cookies.put('authenticated', undefined);
        $location.path('/');

    };
    logoutController.$inject=inject;

    angular.module('loginAngular').controller('logoutController', logoutController);

}());