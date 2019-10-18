angular
    .module("MainModule")
    .factory('dataService', function ($http, $rootScope) {
        return {
            getData: function (config) {
                return $http({
                    method: 'GET',
                    url: '/data',
                    params: config
                })
            }
        }
    });