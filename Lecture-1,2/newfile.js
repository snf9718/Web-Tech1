const http = require('http');

http.createServer((req, res)=>{ //fat arrow notation
    res.writeHead(200, {'content-Type': 'text/html'});//200 means everything is good!
    res.end('<h1>Hello NodeJS</h1>');
})
.listen(3000, ()=> console.log('Server is running on port 3000'));//http://localhost:3000/