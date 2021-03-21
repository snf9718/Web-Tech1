const http = require('http');
var dt = require('./myfirstmodule1');
function hello(fullname){
    console.log('Hello '+fullname); //for printing text on the console
   
}
hello('Saiyida Noor ul ain Fatima ');//call this function

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(dt.hello());
    res.end();
}).listen(8081); //listening on http://127.0.0.1:8080/








        