var url = require ('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr.true);

console.log(q.host); //this returns the hostname 'localhost:8080'
console.log(q.pathname); //returns the default path '/default.htm'
console.log(q.search); //returns date in this format '?year=2017&month=february'

var qdata = q.query; //this returns the object: {year: 2017, month: 'february'}
console.log(qdata.month); //returns 'february'
