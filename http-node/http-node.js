var http = require('http');

http.createServer(function(req, res) {
    // text/plain---文本
    // text/html---HTML
    // application/json---json文本
    // image/gif---图片
    res.writeHead(200, {'Content-Type': 'text/html'});
    // 比如，不开启缓存：
    // res.writeHead(200, {
    //     'Cache-Control': 'no-cache'
    // });
    res.end('<h1>Hello! MotherFucker</h1> <hr>');
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');