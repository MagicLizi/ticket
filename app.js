/**
 * Created by magiclizi on 2017/2/19.
 */
var request = require('request');
var cookie = require('cookie');

var add = function () {
    console.log('开始请求');
    //初始化
    var params = {
        method: 'GET',
        url: 'http://101.api.eg365.cn/Vote/init',
    }
    request(params,function(error,response,body) {
        var cookies = cookie.parse(response.headers['set-cookie'][0]);
        var PHPSESSID = cookies['PHPSESSID'];

        var sessionCookie = 'PHPSESSID='+PHPSESSID;
        console.log(sessionCookie);
        var j = request.jar();
        request.cookie('key1=value1');
        var url = `http://101.api.eg365.cn/Vote/click`;
        j.setCookie(sessionCookie, url);
        var params1 = {
            method: 'POST',
            url: url,
            jar: j,
            form:{
                type:24
            },
            headers:{
                "x-forwarded-for": "1.1.1.10",
                "X-FORWARDED-FOR":"1.1.1.10",
            }
        }
        request(params1,function(error,response,body) {
            console.log(body);
        });
    });

};

setInterval(add,5000);