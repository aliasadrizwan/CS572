var http = require('http');
var fs = require('fs');
var path = require('path');

//Create Server
var server = http.createServer();

server.on('request', async (req, res) => {
    res.writeHead(200, {'Content-Type' : 'multipart/form-data'});
    //It aquires same size of memory as of file size.
    res.write(readFileSync());
    
    res.write( await readFileASync());
    
    readFileUsingStream().pipe(res);

    res.end();
});
server.listen(4000);

//read file using Sync..
var readFileSync = function(){
return fs.readFileSync(path.join(__dirname,'e.rar'));
}

//read file using ASync..
var readFileASync = async function(){
   const read = require('util').promisify(fs.readFile);
   result = await read(path.join(__dirname,'e.rar'));
    return result
    }

//read file using stream..
var readFileUsingStream = function(){
    return fs.createReadStream(path.join(__dirname,'e.rar'));
}