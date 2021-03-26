const express=require('express');
const router=express.Router();


const product_controller=require('./product.controller.js');//this includes the controller


router.get('/test',product_controller.test);//routes are being added here


router.post('/create',product_controller.product_create);//http://localhost:3000/products/create route for create

router.get('/:id',product_controller.product_details);

router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete',product_controller.product_delete);

module.exports=router;//this is where the router is exported!