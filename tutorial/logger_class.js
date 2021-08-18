
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // Should essentialy send an HTTP request,
        // but for now we'll just output to the screen
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'http://blabla'});
    }
    
}

module.exports = Logger;
