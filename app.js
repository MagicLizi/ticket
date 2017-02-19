/**
 * Created by magiclizi on 2017/2/19.
 */
var request = require('request');


var add = function () {
    var curTime = new Date().getTime();
    var lastTime = curTime - 1000;
    var url = `http://101.api.eg365.cn/Vote/click?type=24&_=${lastTime}&callback=Zepto${curTime}`;
    console.log(url);
    request(url, function (error, response, body) {
        console.log(body);
    })
}


setInterval(add,10000);