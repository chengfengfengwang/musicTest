var axios = require('axios');
var qiniu = require("qiniu");

var accessKey = '493-3wqSvs35AYgjhYQaoY4qRHOb4i3bsxdFwwxQ';
var secretKey = 'DKXVZp563b434wmycV36njsqWrYr_ejYuZxSWE1S';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);


var cdnManager = new qiniu.cdn.CdnManager(mac);
var urlsToRefresh = [
    'http://s.immusician.com/web/h5/networkTest.html',
    'http://s.immusician.com/web/h5/addTeacher.html',
    'http://s.immusician.com/web/h5/searchKey.html',
    'http://s.immusician.com/web/h5/musicBase.html',
    'http://s.immusician.com/web/h5/aiCourseList.html',
    'http://s.immusician.com/web/h5/vipConfig.html',
    'http://s.immusician.com/web/h5/test.html'
];
//刷新链接，单次请求链接不可以超过100个，如果超过，请分批发送请求
cdnManager.refreshUrls(urlsToRefresh, function (err, respBody, respInfo) {
    if (err) {
        throw err;
    }
    console.log(respInfo);
    var jsonBody = JSON.parse(respBody);
    console.log(jsonBody);
});