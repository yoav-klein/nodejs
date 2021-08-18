
const fs = require('fs');

// example of using the synchronous version of readdir
// this returns all the files and folders in the current folder
// const files = fs.readdirSync('./');
// console.log(files);

// now let's see the asynchronous version
// this function takes as second parameter a callback function that in turn 
// takes two parameters: ErrnoException and string array. Only one of them will be populated.

// if you pass 'kuku' as first parameter, you'll see the error
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

console.log("waiting..");

