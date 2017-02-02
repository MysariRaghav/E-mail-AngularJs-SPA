/**
 * Created by ragha on 2/2/2017.
 */

(function () {

    var directive= function () {
        return {

            template: '<h1>From my directive</h1>',
            require: 'ngSwitch',
            link: function (scope, element, attrs, ngSwitch) {

               console.log(ngSwitch.$modelValue);
            alert("from my directive dfasl")
            }

        }
    }

    angular.module("loginAngular").directive("directive", directive);
}())
