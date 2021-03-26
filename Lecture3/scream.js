var events = require('events');
var eventEmitter = new events.EventEmitter();

//creating an event handler here
var myEventHandler = function(){
    console.log('I hear a scream!');
}

//Assigning the event handler to an event 
eventEmitter.on('scream', myEventHandler);

//firing the 'scream' event
eventEmitter.emit('scream');