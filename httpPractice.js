const http = require('http');
const server = http.createServer((request,response)=>{
    if(request.url === '/')
    {
        response.write('Your code is working dudeeeeeeeeee');
        response.end();
    }
    if(request.url=='/courses')
    {https://github.com/settings/tokens/new
        response.write("this is course section");
        response.end();
    }
});
server.listen(3000);
console.log('listening ...........');