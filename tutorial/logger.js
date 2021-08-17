
// fake logger server
var url = 'http://mylogger.io/log';

function log(message) {
    // Should essentialy send an HTTP request,
    // but for now we'll just output to the screen
    console.log(message);
}

module.exports.log = log;
