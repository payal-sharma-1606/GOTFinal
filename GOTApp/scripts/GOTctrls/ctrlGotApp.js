app.controller('ctrlGotApp', ['$scope', 'ServiceHelper', function ($scope, ServiceHelper) {
    window.onload = ServiceHelper.getAllCharacters(
        function (response) {
            if (response != null) {
                $scope.Characters = []; 
                angular.forEach(response, function (value, key) {
                    var item = {};
                    item.Id= value._id;
                    item.Name= value.name;
                    item.gender = value.male == true ? "Male" : "Female";
                    $scope.Characters.push(item);  
                });
            }
        },
        function (response) {
            console.log(response);
        })
}]);