/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject= ['util'];
    var registerUser= function (util) {



        this.storeUser= function(username, lname, fname, email, phone, location, password, confPassword){


            var locatStr= localStorage.getItem("users");
            var users=[];

            if(locatStr!== null) {
                users = angular.fromJson(locatStr);
            }

            var user={};
            user.username= username;
            user.lname= lname;
            user.fname= fname;
            user.email= email;
            user.phone= phone;
            user.location= location;
            user.password= password;
            user.confPassword= confPassword;

            /*if(!util.containsUserInArray(user.username, users)) {
                users.push(user);
            }
            else{
                return null;
            }*/

            users.push(user);
            if (window.localStorage && users) {
                alert("From");
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


    registerUser.$inject= inject;
    angular.module("loginAngular").service("registerUser", registerUser)
}());