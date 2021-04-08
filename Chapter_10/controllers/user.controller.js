const User=require('../models/user.model');
exports.loginchk=function(req, res) {
    const {username, password}=req.body;
    try {
        User.findOne({username: username, password:password},(err,user)=>{
            if(user ===null){
                res.end("Login invalid");
            }else if (user.username === req.body.username && user.password === req.body.password){
                res.render('completeprofile',{profileData:user});
            } else {
                console.log("Credentials wrong");
                res.end("Login invalid");
           }
         });  
    } catch(err) {
       res.send(err)
    }
  };
exports.fetchloginform=function(req, res, next) {
    res.render('login', { page:'Login', menuId:'login'});    
  };
