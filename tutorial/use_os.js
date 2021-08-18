

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('free memory:' + freeMemory);
console.log('totla memory: ' + totalMemory);