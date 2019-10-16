angular.module("MainModule", []);
angular.module("MainModule").controller("mainController", ["$http", ($http) => {
    $http({
        method: 'GET',
        url: 'http://localhost:3000/data'
    }).then(function successCallback(response) {
        const tableData = response.data;
    }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
}]);