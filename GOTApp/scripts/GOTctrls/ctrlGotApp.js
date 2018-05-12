gotApp = angular.module('gotApp', []);
gotApp.controller('ctrlGotApp', ['$scope', 'ServiceHelper', function ($scope, ServiceHelper) {
    window.onload = ServiceHelper.getAllCharacters(
        function (response) {
            if (response != null) {
                $scope.Characters.push({
                    Id: value.Id,
                    Name: value.Name,
                    gend: value.Code,
                    ClientSecret: value.Password,
                });
            }
        },
        function (response) {
            console.log(response);
        })
}]);