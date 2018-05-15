var scotchApp = angular.module('scotchApp');
//angular.module('gotApp', ['ngResource', 'ngSanitize']).
scotchApp.factory('ServiceHelper', ['$http', function($http) {
    var factory = {};
    factory.getAllCharacters = function (successCallBack, failCallBack) {
        var requestData = {};
        var WEB_API_CURRENT_URL = AppSetting.ServiceConfig.WEB_API_GET_ALL_CHARACTERS;
        return ServiceCallAsync(requestData, successCallBack, failCallBack, WEB_API_CURRENT_URL);
    }
    ServiceCallAsync = function (requestData, successCallBack, failCallBack, WEB_API_CURRENT_URL) {
        request = {
            method: 'GET',
            url: WEB_API_CURRENT_URL
            //headers: {
            //    'Content-Type': AppSetting.ServiceConfig.WEB_API_MEDIA_TYPE,
            //    'Authorization': 'bearer SACiin5bkD4VpoLuWqzOYxD5EzfJLaeg4wxIMQ8Isusc7wZWeXWs3S_EF2Lr0qt6zZ1S3lf37eZLRWTm8WdvbQXPE9aoA_VLAxB0bK0DQf2Q-hMjllYNyj4jTrTBmKP6l_sN4wd85ii84QCNyY9IyF5STWZMME7Cy-DqSq9KvsIrRGen02_uSiNsoXmMP6YOE1flXTNvpKVSraqpueqw08L5L6J7Gi8uFY2t1NYSTqSWWLu5Yg4OboBh7eVJ8JlP7zkSBAPFYkULf3Ms-KSjobX0bJycewjMdBG-YNGxV96WjYMgI_T8L-MYe4dhLPrc'
            //}
        };
        onSuccess = function (response) {
            //console.log("success");
            var callbacks = $.Callbacks();
            callbacks.add(successCallBack);
            callbacks.fire(response);
        }

        onError = function (response) {
            //console.log("error");
            var callbacks = $.Callbacks();
            callbacks.add(failCallBack);
            callbacks.fire(response);
        }

        //console.log("jshk");

        $http(request)
       .success(onSuccess)
       .error(onError);
    }
    return factory;
}]);
