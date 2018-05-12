gotApp = angular.module('gotApp', []);

gotApp.factory('ServiceHelper', ['$http', '$scope', function ($http, $scope)
{
    var factory = {};
    factory.getAllCharacters = function (successCallBack, failCallBack)
    {
        var requestData = {};
        var WEB_API_CURRENT_URL = AppSetting.ServiceConfig.WEB_API_GET_ALL_CHARACTERS;
        return ServiceCallAsync(requestData, successCallBack, failCallBack, WEB_API_CURRENT_URL);
    }
    ServiceCallAsync = function (requestData, successCallBack, failCallBack, WEB_API_CURRENT_URL)
    {
        request = {
            method: 'GET',
            url: WEB_API_CURRENT_URL,
            headers: {
                'Content-Type': AppSetting.ServiceConfig.WEB_API_MEDIA_TYPE
            }
        }
        onSuccess = function (response) {
            var callbacks = $.Callbacks();
            callbacks.add(successCallBack);
            callbacks.fire(response);
        }

        onError = function (response) {
            var callbacks = $.Callbacks();
            callbacks.add(failCallBack);
            callbacks.fire(response);
        }

        $http(request)
       .success(onSuccess)
       .error(onError);
    }
    return factory;
}]);
