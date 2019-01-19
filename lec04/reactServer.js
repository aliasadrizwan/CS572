const http = require('http');
const url = require('url');
const {fork} = require('child_process');



http.createServer((req, resp) => {
    //read query string from url.
    var filePath = url.parse(req.url,true).query.url;
    console.log(filePath);
    const childProcess = fork('readFile.js'); 
    childProcess.on('message',(data)=>{
        console.log(`File Data: \n ${data}`);
    });
    childProcess.send(filePath);

    //resp.end();
}).listen(3000,()=>console.log('listening at port 3000...'));