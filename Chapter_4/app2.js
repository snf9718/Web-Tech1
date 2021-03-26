var birdy = require ('./birds.js'); //router is in birds.js 
var express = require ('express');
const { Console } = require('node:console');
var app= express();

app.use('/birds', birdy)

 var server = app.listen(3000,()=>{
Console.log("Connected!")});