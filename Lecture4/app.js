var express = require('express');

var app= express();

/* app.get('/', function (req, res){
   // res.send('Hello World!');//message will be printed on http//:localhost:3000
res.send("Welcome to the tutorials page!!");
}); */
var server = app.listen(3000, function(){ //app will be listening at port 3000

});

app.all('/secret', function(req , res, next){
    res.send('Accessing the secret section.....');
    next() //passing control over to the next handler
});

//Adding routes
app.route('/Node').get(function(req, res){
    res.send("Tutorial on Node");
});

app.route('/Angular').get(function(req, res){
    res.send("Tutorial on Angular");
});

//GET method route
app.get('/', function(req, res){
    res.send('GET request to the homepage');
});

//POST method route 
app.post('/', function(req, res){
    res.send('POST request to the homepage');
});

app.get('/users/:userId/books/:bookId', function(req, res){
    res.send(req.params);
});

app.get('/example/a', function(req,res){
    res.send('Hello from A!');
});

app.get('/example/b', function(req, res, next ){
    console.log('the response will be sent by the next function...');
    next();
}, (req, res) => {
        res.send('Hello from B!');
    });