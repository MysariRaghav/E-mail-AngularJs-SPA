/**
 * Created by ragha on 1/28/2017.
 */
(function () {
    var registerUser= function () {



        this.storeUser= function(username, email, password, confPassword){


            var locatStr= localStorage.getItem("users");
            var users=[];

            if(locatStr!== null) {
                users = angular.fromJson(locatStr);
            }

            var user={};
            user.username= username;
            user.email= email;
            user.password= password;
            user. confPassword= confPassword;


            users.push(user);

            if (window.localStorage && users) {
                localStorage.setItem("users", angular.toJson(users));
            }

            return users;
        }

        this.getUsers= function () {

            var locatStr= localStorage.getItem("users");
            var users=[];

            if(locatStr!== null) {
                users = angular.fromJson(locatStr);
            }

            return users;

        }
    }


    registerUser.$inject= [];
    angular.module("loginAngular").service("registerUser", registerUser)
}());