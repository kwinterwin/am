angular
    .module("appTableComponent", [])
    .component("appTableComponent", {
        templateUrl: "./js/app-table-component/app-table-component.template.html",
        controller: function atc(dataService, $scope) {
            dataService.getData().then((response) => {
                const dataProperty = this.color + "listData";
                this.tablesData = response.data[dataProperty];
            });

            this.setCreatedOnDate = (stringDate) => {
                const date = eval(stringDate.replace(/\//gi, ""));
                return date;
            };

            this.sortDateColumn = ()=>{
                debugger
            }
        },
        bindings: {
            color: "=",
            types: "="
        }
    });