// this class is for emitting the function
const EventEmitter = require('events');

// var url ="http://arun.com";
class Logger extends EventEmitter{
    log(message)
    {
        //send an http request
        console.log(message);
        //raise an event
        this.emit("messageHi","from emitter");
    }

}
module.exports = Logger;
