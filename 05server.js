const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    res.statusCode=200;
    res.resHeader=('Content-Type','text/plain');
    res.end('Hello Worl\n')
});

server.listen(8000);
console.log("servidor en la url http://localhost:8000");