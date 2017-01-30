/**
 * Created by ragha on 1/30/2017.
 */
(function () {
    var inject=[];
    var util= function () {
        //alert("Alert from validateUser")

        this.containsObjectInArray= function (obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    return true;
                }
            }

            return false;
        }

        this.containsUserInArray= function (obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i].username === obj) {
                    return true;
                }
            }

            return false;
        }

        this.containsObjectInObject= function (obj, list) {
            var x;
            for (x in list) {
                if (list.hasOwnProperty(x) && list[x] === obj) {
                    return true;
                }
            }

            return false;
        }
    }

util.$inject= inject;
angular.module("loginAngular").service("util", util);
}());