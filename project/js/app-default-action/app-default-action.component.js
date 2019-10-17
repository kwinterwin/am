angular
    .module("appDefaultAction")
    .component("appDefaultAction", {
        templateUrl: "./js/app-default-action/app-default-action.template.html",
        controller: function appDefaultActionController($scope) {
            this.firstLetterCaps = function(string){
                return string[0].toUpperCase() + string.substring(1);
            }
        },
        bindings: {
            color: "=",
            types: "="
        }
    });