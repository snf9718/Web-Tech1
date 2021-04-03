
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let StudentsSchema=new Schema({
    student_name:{type:String, required:true,max:100},
    student_ID:{type:Number,required:true},
    program_name:{type:String, required:true,max:100}
});

module.exports=mongoose.model('Student',StudentsSchema);