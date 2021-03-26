var fs = require("fs");


fs.readFileSync('input.txt', function(err,data){
    if (err) return console.error(err);
        console.log(data.tostring());
});
console.log("Program Ended");
//non blocking call