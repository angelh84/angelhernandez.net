/* --------------- COOKIE BAKERY CLASS ------------------ */

var cookieBakery = (function () {

    var bake = function (cookie, expiryDays) {
        var dateFunc = new Date();
        dateFunc.setTime(dateFunc.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + dateFunc.toUTCString();
        document.cookie = cookie + ";" + expires + ";path=/";
    };

    var eat = function (cookie) {
        var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = cookie + "=;" + expires + ";path=/";
    };

    var check = function (name) {
        var cookie = document.cookie;
        var prefix = name + "=";
        var begin = cookie.indexOf("; " + prefix);
        if (begin == -1) {
            begin = cookie.indexOf(prefix);
            if (begin != 0) return null;
        } else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = cookie.length;
            }
        }
        return unescape(cookie.substring(begin + prefix.length, end));
    } 

    var getCookieVal = function (cookieName) {
        var cookieJar = [];
        var temp = document.cookie.split(";");
        var key = "";
        var val = "";
        for (i = 0; i < temp.length; i++) {
            key = temp[i].split("=")[0].trim();
            val = temp[i].split("=")[1];
            cookieJar[key] = val;
        }
        return cookieJar[cookieName];
    };

    return {
        bake: bake,
        eat: eat,
        check: check,
        getCookieVal: getCookieVal
    }

})();


/* -------------------- COOKIE AUTH MANAGEMENT --------------------- */


var logoutURL = function (label) {
    var pathname = window.location.pathname;
    var pathHost = window.location.host;
    var pathArr = pathname.split('/');
    var pathLength = pathArr.length;
    var hostPathnameAppend = function () {
        var hostPathnameArr = [];
        for (var i = 0; i < pathLength - 3; i++) {
        hostPathnameArr.push(pathArr[i]);
        }
        return hostPathnameArr;
    };
    var newHostPathname = hostPathnameAppend().join('/');

    return 'http://' + pathHost + newHostPathname + '/index.html';

    // console.log(urlUserType)
    // console.log(urlDataRangeNumber);
    // console.log(urlDataFilename);
    // console.log(console.log('http://' + pathHost + newHostPathname + '/' + urlUserType + '/30/' + urlDataFilename))
}


var loggedIn = cookieBakery.check('demo');
if (loggedIn === null && !window.location.pathname.includes('index.html')) {
    window.location.href = logoutURL();
};
