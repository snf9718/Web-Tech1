var http = require('http');
var msg = require('./log.js');
msg('Hello');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Welcome'+n);
    res.end();
}) .listen(8081);
