/**
 * Created by ragha on 1/30/2017.
 */
(function () {

    var inject= ['$rootScope', '$location', '$cookies'];
    var intercept= function($rootScope, $location, $cookies) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            var userAuthenticated =  $cookies.get('authenticated');

            if(next.isLogin && !$rootScope.savedLocation)
                $rootScope.savedLocation ='/welcome';

            console.log(userAuthenticated)
            alert("Not"+ "   "+ (!userAuthenticated) + "   "+ (!next.isLogin) + "   "+ ((!userAuthenticated) && (!next.isLogin)));

            if ((!userAuthenticated) && (!next.isLogin)) {
                /* You can save the user's location to take him back to the same page after he has logged-in */
                alert("Not Auth"+ "   "+ userAuthenticated);
                $rootScope.savedLocation = $location.url();
                $location.path('/');
            }


        })
    }
    intercept.$inject= inject;

    angular.module("loginAngular").run(intercept)

}())