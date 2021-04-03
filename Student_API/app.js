const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const student=require('./Routes/StudentRoutes');
// initialize our express app
const app = express();


// Setting up mongoose connection here
mongoose.connect("mongodb://localhost/StudentsDb", {useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/students',student);

app.listen(3000, () => {
    console.log('The Server is up and currently running on port number 3000......');
});