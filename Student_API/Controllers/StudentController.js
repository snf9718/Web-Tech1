const Student=require('../Models/StudentsModel');
const fs=require('fs');


exports.test=function(req,res){
    res.send('Hello! Greetings from the Test Controller....');
};

exports.student_create = function (req, res) {
    let  = new Student(
        {
            student_name: req.body.student_name,
            student_ID: req.body.student_ID,
            program_name: req.body.program_name
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('New Student Entry Created successfully!')
    })
};

exports.student_details = function (req, res) {
    Student.findById(req.params.id, function (err, student) {
        if (err) return next(err);
        res.send(Student);
    })
};

exports.student_update = function (req, res) {
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, student) {
        if (err) return next(err);
        res.send('Student udpated.');
    });
};

exports.student_delete = function (req, res) {
    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Student Deleted successfully!');
    })
};