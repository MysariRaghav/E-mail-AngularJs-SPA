/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var validateUser= function (registerUser, $location) {
        //alert("Alert from validateUser")

/*        this.getUser= function (username, password) {
            var users= registerUser.getUsers();

            for( user in users)
            {
                if(users[user].username === username && users[user].password === password)
                {
                     return users[user];
                }
            }
            //$location.path('/');
        }*/

        this.getUser= function (username) {
            var users= registerUser.getUsers();

            for( user in users)
            {
                if(users[user].username === username)
                {
                    return users[user];
                }
            }
        }


    }

    validateUser.$inject= ['registerUser','$location'];
    angular.module("loginAngular").service("validateUser", validateUser);
}());