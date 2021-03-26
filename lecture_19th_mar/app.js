const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const mongoose=require('mongoose');

const app=express();

//Mongoose connection is being establisted here...
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to the Database Sucessfully!');
})
.catch(err => {
        console.log("Error! Can't connect to the database.", err);
        process.exit();
      });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/products',product); //route for products page http://localhost:3000/products

app.listen(3000,()=>{console.log('Server is up and running on port 3000.')}); //the server is listing here at port 3000