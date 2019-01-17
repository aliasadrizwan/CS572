var eventEmitter = require('events');

class Gym extends eventEmitter{
    constructor(){
        super();
    }
    boom(){        
        this.emit('msg','Athlete is working');
    }
}

var work = new Gym();
work.on('msg', function(msg){console.log(msg)});
setInterval(()=>{work.boom();},1000);
