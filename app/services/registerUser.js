/**
 * Created by ragha on 1/28/2017.
 */
(function () {

    var inject= ['util'];
    var registerUser= function (util) {



        this.storeUser= function(username, lname, fname, email, phone, location, password, confPassword, messages){


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
            user.messages= messages;

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

        this.updateUser= function(username, lname, fname, email, phone, location, password, confPassword, messages){


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
            user.messages= messages;

            users= users.filter(function(el) {
                alert(el.username +" " +user.username +" = "+(el.username ===  user.username))
                return el.username !==  user.username;
            });

             users.push(user);
            if (window.localStorage && users) {
                localStorage.setItem("users", angular.toJson(users));
            }

            return users;
        }


        this.updateUser= function(user){


            var locatStr= localStorage.getItem("users");
            var users=[];

            if(locatStr!== null) {
                users = angular.fromJson(locatStr);
            }

            users= users.filter(function(el) {
                alert(el.username +" " +user.username +" = "+(el.username ===  user.username))
                return el.username !==  user.username;
            });

            users.push(user);
            if (window.localStorage && users) {
                localStorage.setItem("users", angular.toJson(users));
            }

            return users;
        }


    }


    registerUser.$inject= inject;
    angular.module("loginAngular").service("registerUser", registerUser)
}());