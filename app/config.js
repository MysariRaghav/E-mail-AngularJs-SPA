/**
 * Created by ragha on 1/27/2017.
 */

(function () {

    var Configuration= function($routeProvider) {

        $routeProvider
            .when("/", {
                controller: 'alertController',
                templateUrl: 'app/views/login.html'
            })
            .when("/toregister", {
                controller: 'registerController',
                templateUrl: 'app/views/register.html'
            })
            .otherwise( { redirectTo: '/' } );
    }

    Configuration.$inject= ['$routeProvider'];
    angular.module("loginAngular").config(Configuration)
}());

