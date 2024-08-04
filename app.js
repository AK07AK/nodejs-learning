const Logger = require('./logger');
const logger = new Logger();

//Register event 
logger.on('messageHi',function(message){
    console.log("message from"+message);
});



logger.log('message');


