const express=require('express');
const router=express.Router();
const user_controller=require('../controllers/user.controller');
//login page
router.get('/login', user_controller.fetchloginform);
router.post('/login', user_controller.loginchk);
module.exports=router;
