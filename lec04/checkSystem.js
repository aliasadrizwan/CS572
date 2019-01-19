const os = require('os');
const {Observable} = require('rxjs');

//checkSystem();

const checkSystem = Observable.create(function(observer){
    console.log('Checking your System...');

    let flag = true;
    //find total memory of system in GB.
    var memory = Math.round(((os.totalmem() /1024)/1024)/1024);
    if(memory < 4) {flag = flase; observer.next('This app needs atleast 4GB of RAM.');}
    else observer.next(`Total Memory: ${memory} GB`);

    //find total cores of cpu.
    var cores = os.cpus().length;
    if(cores < 2) {flag = flase; observer.next('Processor is not supported.');}
    else observer.next(`CPU total cores: ${cores}`);

    if(flag = true) observer.next('System is checked successfully.');

});

checkSystem.subscribe(function(x){
    console.log(x);
});