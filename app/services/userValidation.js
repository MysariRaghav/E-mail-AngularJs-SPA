/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var validateUser= function (registerUser, $location) {

        this.check= function (username, password) {
            var users= registerUser.getUsers();

            for( user in users)
            {

                if(users[user].username === username && users[user].password === password)
                {
                    alert("Login");
                     this.isvalid = true;
                }else{
                    continue;
                }
                 break;
            }
            //$location.path('/');
        }


    }

    validateUser.$inject= ['registerUser','$location'];
    angular.module("loginAngular").service("validateUser", validateUser);
}());