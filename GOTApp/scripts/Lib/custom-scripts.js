/// <reference path="../../Login.html" />
/// <reference path="../../Login.html" />
/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";

   
        
$(document).ready(function () {
    var Authenticated = AppCommon.Common.GetStorage('AuthenticationToken');
    if (Authenticated.length < 2) {
        location.href = "../default.html";
    } 
    else {
        //var MenuId = AppCommon.Common.GetStorage('MenuId');
        //if (MenuId.length > 0) {
        //    var url = window.location.href;
        //    var n = url.lastIndexOf('/');
        //    var routeParameter = url.substring(n + 1);
        //    if (routeParameter == "") {
        //        $('li').removeClass("active");
        //    } else {
        //        $('li').removeClass("active");
        //        $("#" + MenuId).addClass("active");
        //    }            
        //}
        GetSelection();
        //mainApp.initFunction();
    }

});

//Call When Header Button is pressed or Back Button is Pressed
$(window).on('popstate', function (event) {

    GetSelection();
   
});

$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});


    //get headerMenuId based on index Present in array AppCommon.PortalMenus 
function GetMenuId (Index)
{
    var MenuId = "";
    switch(Index)
    {
        case 0:
            MenuId = "#2Q";
            break;
        case 1:
            MenuId = "#2R1";
            break;
        case 2:
            MenuId = "#2R2";
            break;
        case 3:
            MenuId = "#3F";
            break;
        case 4:
            MenuId = "#M5";
            break;
    }

    return MenuId;
}


//Enable and disable the header active class 
function GetSelection()
{
    var UrlVar = getUrlVars();
    var Page = UrlVar[0][0];
    if (UrlVar[0][1] != undefined && (Page=="2R"|| Page=="2U" ))
    {
        Page = Page + getAllUrlParams(window.location.hash).page;
    }
    if (Page == "3I") {
        Page = Page +  getAllUrlParams(window.location.hash).gt;
    }
    $('#nav ul li').removeClass("active");
    $.each(AppCommon.PortalMenus, function (key, obj) {
        if ($.inArray(Page, obj) !== -1)
            $(GetMenuId(key)).addClass("active");

    });


}

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // in case params look like: list[]=thing1&list[]=thing2
            var paramNum = undefined;
            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                paramNum = v.slice(1, -1);
                return '';
            });

            // set parameter value (use 'true' if empty)
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            paramValue = paramValue.toLowerCase();

            // if parameter name already exists
            if (obj[paramName]) {
                // convert value to array (if still string)
                if (typeof obj[paramName] === 'string') {
                    obj[paramName] = [obj[paramName]];
                }
                // if no array index number specified...
                if (typeof paramNum === 'undefined') {
                    // put the value on the end of the array
                    obj[paramName].push(paramValue);
                }
                    // if array index number specified...
                else {
                    // put the value at that index number
                    obj[paramName][paramNum] = paramValue;
                }
            }
                // if param name doesn't exist yet, set it
            else {
                obj[paramName] = paramValue;
            }
        }
    }

    return obj;
}


//Get URL parameters
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        if (!i)
        {
            var val = hashes[i].replace('/', '').split('?');
            vars[i] = val;

        }
        else
        {

            hash = hashes[i].split('?');
            var Formattedval = hash[0].split('=');
            vars[i]= Formattedval[1];
 }
       
    }
    return vars;
}



//$('#nav ul li').click(function () {
//    $('li').removeClass("active");
//    AppCommon.Common.SetStorage(AppSetting.LocalStore.CurrentMenuId, this.id);
//    $(this).addClass("active");
//});

}(jQuery));

