var express = require('express');
var app = express();

var responsePort = 6001;  // 请求页面跑在6001端口

app.get('/api', (req, res) => {
    res.send("Hello world from Proxy  :)")
});

app.listen(responsePort, function () {
    console.log('Responser is listening on port '+ responsePort);
});
