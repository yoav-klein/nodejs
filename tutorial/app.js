
function sayHello(name) {
    console.log('Hello ' + name);
}

// sayHello('Yoav');

// simple logger
const logger = require('./logger.js');
console.log(logger);

logger.log('Success !!');

// logger_class
const Logger = require('./logger_class');
const logger1 = new Logger();

logger1.on('messageLogged', function(arg) {
    console.log(`Logger called ! id: ${arg.id}, url: ${arg.url}`);
});

logger1.log('Wow!!');

