/**
 * Created by ragha on 1/30/2017.
 */
(function () {

    inject= ['registerUser', 'util'];
    var validation= function (registerUser, util) {

        this.userExists= function () {

            var users= registerUser.getUsers();

            this.my_form.usernamesignup.$setValidity("user_exists", !util.containsUserInArray(this.username, users));
        }



        this.matchPassword= function () {
            this.my_form.passignup_confirm.$setValidity("pass_err", this.password === this.confPassword);
        }
    }

    validation.$inject= inject;
    angular.module("loginAngular").service("validation", validation);
}());