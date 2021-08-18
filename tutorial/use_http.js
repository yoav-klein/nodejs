
const http = require('http');

const server = http.createServer(function(req, resp) {
    if(req.url === '/') resp.write('Hello world !');

    if(req.url === '/api/courses') {
        resp.write(JSON.stringify([1, 2, 3]))
    }
    resp.end();
}); // returns http.Server instance


/*
server.on('connection', function(socket) {
    console.log('New connection..');
});
*/

server.listen(3001);

console.log('Listening on port 3000');