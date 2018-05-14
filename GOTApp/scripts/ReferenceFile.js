var _scripts = [];
    _scripts.push("../scripts/Helpers/configurationHelper.js");
    _scripts.push("../scripts/Helpers/ServiceHelper.js");
    _scripts.push("../scripts/GOTctrls/ctrlGotApp.js");


    for (var i = 0; i < _scripts.length; i++)
        document.write("<script src=" + _scripts[i] + "><\/script>");