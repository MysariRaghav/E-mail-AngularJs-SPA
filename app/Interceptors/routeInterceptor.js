/**
 * Created by ragha on 1/30/2017.
 */
(function () {

    var inject= ['$rootScope', '$location', '$cookies', '$window'];
    var intercept= function($rootScope, $location, $cookies, $window) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {

            var userAuthenticated =  $cookies.get('authenticated');

            if(next.isLogin && !$rootScope.savedLocation)
                $rootScope.savedLocation ='/welcome';

            /*console.log(userAuthenticated)
            alert("Not"+ "   "+ (!userAuthenticated) + "   "+ (!next.isLogin) + "   "+ ((!userAuthenticated) && (!next.isLogin)));*/

            if ((!userAuthenticated) && (!next.isLogin)) {
                /* You can save the user's location to take him back to the same page after he has logged-in */
               // alert("Not Auth"+ "   "+ userAuthenticated);
                $rootScope.savedLocation = $location.url();
                $location.path('/');
            }


        });

        /*$window.onbeforeunload*/
        $window.close= function() {
            alert("Cleaning")
            clearCookies()
        };

        function clearCookies(){
            angular.forEach($cookies, function (value, key) {
                alert(value+ "   "+ key)
                $cookies.remove(key);
            });
        }
    };
    intercept.$inject= inject;

    angular.module("loginAngular").run(intercept)

}())