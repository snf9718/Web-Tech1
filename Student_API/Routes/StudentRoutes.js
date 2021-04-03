const express=require('express');
const router=express.Router();

const students_controller=require('../Controllers/StudentController');

router.get('/test',students_controller.test);
router.post('/create', students_controller.student_create);
router.get('/:id', students_controller.student_details);
router.put('/:id/update', students_controller.student_update);
router.delete('/:id/delete', students_controller.student_delete);

module.exports=router;