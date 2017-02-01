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

        $rootScope.deleteCookies = function(){
            angular.forEach($cookies, function (value, key) {
                alert(value+ "   "+ key);
                $cookies.remove(key);
            });

        };
        $window.onbeforeunload = function(){
            $rootScope.deleteCookies();
            //angular.element(document.getElementById('YourElementId')).scope().leavingPageText();
            return 'hello there, pls be sure';
        };


       /* $rootScope.$on('$locationChangeStart', function(event, next, current) {
            if(!confirm(leavingPageText + "\n\nAre you sure you want to leave this page?")) {
                event.preventDefault();
            }
        });
*/


        /*function clearCookies(){
            alert("from clearing cookies");
            angular.forEach($cookies, function (value, key) {
                alert(value+ "   "+ key)
                $cookies.remove(key);
            });
        }*/
    };
    intercept.$inject= inject;

    angular.module("loginAngular").run(intercept)

}());