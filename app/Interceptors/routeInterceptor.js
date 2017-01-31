/**
 * Created by ragha on 1/30/2017.
 */
(function () {

    angular.module("loginAngular").
    run(function($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            var userAuthenticated = $rootScope.authenticated;
            $rootScope.savedLocation ='/welcome';
            if (!userAuthenticated && !next.isLogin) {
                /* You can save the user's location to take him back to the same page after he has logged-in */
                alert("Not Auth"+ "   "+ userAuthenticated)
                $rootScope.savedLocation = $location.url();

                $location.path('/');
            }

        })
    })

}())