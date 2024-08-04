const http = require('http');

const server = http.createServer();
var count=0;
server.on('connection',(socket)=>{
    count++;
    console.log("New Connection user .... "+count);
});

server.listen(3000);

console.log('Listening on port 3000.....');
