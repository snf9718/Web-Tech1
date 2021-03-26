const { request, response } = require('express');
const express = require('express');
const app = express();

app.get ('/',(request, response)=>{
    response.send('Hello World!')
})
 app.listen(3000, console.log('The App is listening at port 3000'));