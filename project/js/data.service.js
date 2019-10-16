angular
    .module("MainModule")
    .service('dataService', function ($http, $rootScope) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/data'
        }).then((response) => {
            // debugger
            $rootScope.data = response.data;
        });
    });