var http = require('http');

var data = require('./index');

n = data.Name('Saiyida Noor ul ain Fatima ');
g = data.Gender('Female');
d = data.DOB('3rd Sep 1997 ');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Welcome!');
    res.write('\n');
    res.write('Name: '+n);
    res.write('\n');
    res.write('Gender: '+g);
    res.write('\n');
    res.write('Date of Birth:'+d)
    res.write('\n');
    res.end();
}) .listen(8081);

