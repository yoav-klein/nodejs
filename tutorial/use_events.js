
const EventsEmitter = require('events');
const emitter = new EventsEmitter();

// add a listener to the 'messageLogged' event
emitter.addListener('messageLogged', function(arg) {
    console.log(`Listener called, id: ${arg.id}, url: ${arg.url}`);
});

// emit an event called messageLogged
emitter.emit('messageLogged', {id: 1, url: 'http://blabla'});