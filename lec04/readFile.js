const {Subject} = require('rxjs');
const subject = new Subject();
const fs = require('fs');
const path = require('path');

let content;
const readFile = function (filePath){
        content = fs.readFileSync(path.join(__dirname,filePath));
}
 
subject.subscribe(readFile);

process.on('message', (filePath) => {
   subject.next(filePath);
   process.send(''+content);
})


