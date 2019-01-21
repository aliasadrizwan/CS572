const express = require('express');
const axios = require('axios');
const app = express();

const port = 3000;
app.enable('trust proxy');
app.set('x-powered-by',false);
app.enable('case sensitive routing');
app.set('strict routing',true);
app.set('max-age',86400);

app.get('/user',function(req, res){
    res.status(200);
    res.send('Reading Data...');
    res.end();
}).listen(port,()=>{console.log(`The server is running on port ${port}`)});


var getData= async function(){
 try{
    var response = await axios.get('https://randomuser.me/api/?results=10');
    console.log(response.data.results);
 }
 catch(error){
     console.log(error);
 }   
}
getData();
