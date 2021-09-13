const fs = require('fs');

const http = require('http');

const server = http.createServer();


server.on('request',(req,res)=>{
    fs.writeFile('./big.txt', (err,data)=>{
        if(err){
            console.log('error',err);
        }else{
            res.end(data)
        }
        
    })
})
server.listen(3000)
console.log('Server On');