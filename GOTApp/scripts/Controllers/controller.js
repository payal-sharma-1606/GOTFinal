var scotchApp = angular.module('scotchApp');

scotchApp.controller('aboutController', function ($scope, ServiceHelper, $location) {
    var urlType = {
        Characters: "1",
        Locations: "2",
        Houses:"3",
        Ages: "4",
        Cultures: "5",
        Events: "6",
    };

    $scope.message = '';
    $scope.Flag = '';

    if ($location.search().Page == urlType.Characters)
    {
        $scope.Flag = urlType.Characters
        $scope.message = 'Characters';
        ServiceHelper.getAllCharacters(
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

    } else if ($location.search().Page == urlType.Locations) {
        $scope.Flag = urlType.Locations
        $scope.message = 'Locations';
    } else if ($location.search().Page == urlType.Houses) {
        $scope.message = 'Houses';
    } else if ($location.search().Page == urlType.Cultures) {
        $scope.message = 'Cultures';
    } else if ($location.search().Page == urlType.Ages) {
        $scope.message = 'Ages';
    } else if ($location.search().Page == urlType.Events) {
        $scope.message = 'Events';
    }

   
});
