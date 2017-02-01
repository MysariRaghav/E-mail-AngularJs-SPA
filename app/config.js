/**
 * Created by ragha on 1/27/2017.
 */

(function () {

    var Configuration= function($routeProvider) {

        $routeProvider
            .when("/", {
                controller: 'loginController',
                templateUrl: 'app/views/login.html',
                isLogin: true
            })
            .when("/toregister", {
                controller: 'registerController',
                templateUrl: 'app/views/register.html'
            })
            .when("/profile", {
                controller: 'profileController',
                templateUrl: 'app/views/profile.html'
            })
            .when("/messages", {
                controller: 'messagesController',
                templateUrl: 'app/views/messages.html'
            })
            .when("/logout", {
                controller: 'logoutController',
                templateUrl: 'app/views/logout.html'
            })
            .when("/welcome", {
                controller: 'welcomeController',
                templateUrl: 'app/views/welcome.html'
            }).when("/compose", {
            controller: 'composeController',
            templateUrl: 'app/views/compose.html'
            })
            .otherwise( { redirectTo: '/' } );
    }

    Configuration.$inject= ['$routeProvider'];
    angular.module("loginAngular").config(Configuration)
}());

