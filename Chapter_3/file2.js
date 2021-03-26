var fs = require ('fs');

//fs.appendFile('mynewfile1.txt','Hello Content!' , function (err){
  //fs.open('mynewfile2.txt' , 'w', function (err, file){
 // fs.writeFile('mynewfile3.txt', 'Hello Content!', function(err){
 //fs.appendFile('mynewfile1.txt', 'This is my text.', function (err){
//fs.writeFile('mynewfile3.txt', 'This is my text....', function(err){ 
//fs.unlink('mynewfile2.txt', function(err){
fs.rename('mynewfile1.txt', 'myrenamefile.txt', function(err){  
if(err) throw err;
console.log('File Renamed!');   
//console.log('File deleted');   
//console.log('Replaced!');
    // console.log('Updated!');  
 // console.log('Saved!');
  }); 
