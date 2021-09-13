const fs =require('fs');

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");
const consolaPaquito = new console.Console(out,err);


consolaPaquito.log('hola mundo')