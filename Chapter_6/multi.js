var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj =[
        {name: 'John', address:"Highway 71"},
        {name: 'Alex', address:"LowStreet 4"},
        {name: 'Chuck', address:"Central st 142"}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res){
        if (err) throw err;
        console.log("Number of documnets inserted: "+res.insertedCount);
        db.close();
    });
});
