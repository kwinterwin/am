angular
    .module("appTableComponent", [])
    .component("appTableComponent", {
    templateUrl: "./js/app-table-component/app-table-component.template.html",
    controller: function atc($rootScope, $http, $scope) {
        $scope.obj = $rootScope.data;
        $http({
            method: 'GET',
            url: 'http://localhost:3000/data'
        }).then((response) => {
            $rootScope.data = response.data;
        });
    }
});