/**
 * Created by ragha on 1/30/2017.
 */
(function () {

    var inject= ['$rootScope', '$location', '$cookies'];
    var intercept= function($rootScope, $location, $cookies) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            var userAuthenticated =  $cookies.get('authenticated');
            if(next.isLogin)
                $rootScope.savedLocation ='/welcome';
            else
                $rootScope.savedLocation = $location.url();

            if (!userAuthenticated && !next.isLogin) {
                /* You can save the user's location to take him back to the same page after he has logged-in */
                alert("Not Auth"+ "   "+ userAuthenticated);
                $location.path('/');
            }

        })
    }
    intercept.$inject= inject;

    angular.module("loginAngular").run(intercept)

}())