angular
    .module("appTotalListComponent")
    .component("appTotalListComponent", {
        templateUrl: "./js/app-total-list-component/app-total-list-component.template.html",
        controller: function appTotalListComponentController($scope) {
            this.types = {
                "1": "Domain",
                "2": "Bundle"
            };
        },
        bindings: {
            listColor: "="
        }
    });