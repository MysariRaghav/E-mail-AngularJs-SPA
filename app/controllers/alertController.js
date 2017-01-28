/**
 * Created by ragha on 1/27/2017.
 */
(function () {
    var alertController= function ($window) {
        //$window.alert("Hello");
    }

    alertController.$inject=['$window'];

    angular.module("loginAngular").controller("alertController", alertController);
}());