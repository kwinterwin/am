angular
    .module("appTableComponent", [])
    .component("appTableComponent", {
        templateUrl: "./js/app-table-component/app-table-component.template.html",
        controller: function atc(dataService, $scope) {
            dataService.getData().then((response) => {
                $scope.tablesData = response.data.whitelistData;
           });
        }
    });

// dataService