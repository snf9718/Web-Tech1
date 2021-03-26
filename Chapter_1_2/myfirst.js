var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hello World Test\n');
})
.listen(8080);// listening on http://127.0.0.1:8080/
console.log('Server running at http://127.0.0.1:8080/');