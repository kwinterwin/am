angular
    .module("appTableComponent", [])
    .component("appTableComponent", {
        templateUrl: "./js/app-table-component/app-table-component.template.html",
        controller: function atc(dataService, $scope) {
            dataService.getData().then((response) => {
                const dataProperty = this.color + "listData";
                this.tablesData = response.data[dataProperty];
            });
            const millisecondsRegexp = /\d+/gi;

            this.setCreatedOnDate = (stringDate) => {
                const date = (Number(stringDate.match(millisecondsRegexp)[0]));
                return date;
            };

            this.sortDateColumn = () => {
                this.tablesData.sort((a, b) => {
                    // const millisecondsRegexp = /\d+/gi;
                    const aCreatedOn = Number(a.CreatedOn.match(millisecondsRegexp)[0]);
                    const bCreatedOn = Number(b.CreatedOn.match(millisecondsRegexp)[0]);
                    return bCreatedOn - aCreatedOn;
                });
            }
        },
        bindings: {
            color: "=",
            types: "="
        }
    });