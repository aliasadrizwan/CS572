const dns = require('dns');

//Find IP using resolve4 method.

dns.resolve4('mum.edu',(err,address) => {
    if(err) throw err;
    console.log(`address:${JSON.stringify(address)} `);
});

//Find IP using Promise

var getIP = function(){
    return new Promise(function(resolve, reject){
        dns.resolve4('mum.edu',(err, address) => {
            if(err) reject(err);
            else resolve(address);
        });
    });
};

getIP().then((addr) => console.log(addr))
.catch((error) => console.log(error));


//Find IP using Async/Await

var getIP = function(){
    return new Promise(function(resolve, reject){
        dns.resolve4('mum.edu',(err, address) => {
            if(err) reject(err);
            else resolve(address);
        });
    });
};

(async function(){
try{
    const addr = await getIP();
    console.log(addr);
}
catch(error){
    console.log(error);
}
})();


