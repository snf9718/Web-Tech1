var express = require('express');
var router = express.Router();

//middleware that is specific to this router
router.use(function timelog(req, res, next){
    console.log('Time:', Date.now());
    next();

    })
//defining the home page route here...
router.get('/', function(req,res){
    res.send("Birds home page");
})

//defining the about route here....
router.get('/about',function(req, res){
    res.send('About birds');
})

module.exports = router;
