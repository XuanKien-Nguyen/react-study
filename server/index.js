require('dotenv').config();

const express = require('express'); 

const app = express();

const port = process.env.PORT || 8080;

app.get('/', function(req, res){
    const data = {
        'status_code': 200
    }
     
     res.send(data);
})

app.listen(() =>{
    console.log("Your app running on port " + port);
})