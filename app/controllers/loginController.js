/**
 * Created by ragha on 1/27/2017.
 */
(function () {
    var loginController= function ($window) {
        //$window.alert("Hello");
    }

    loginController.$inject=['$window'];

    angular.module("loginAngular").controller("loginController", loginController);
}());