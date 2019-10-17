angular
    .module("MainModule")
    .factory('dataService', function ($http, $rootScope) {
        return {
            getData: function () {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:3000/data'
                });
            }
        }
    });