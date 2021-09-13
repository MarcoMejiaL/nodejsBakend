const fs = require('fs');


const file =process.argv[2];

if(!file){
    throw new Error('Inidica el Archivo');
}

const content =fs.readFileSync(file, function(err,content){    
if(err){
    return console.log(err);
}
const lines = content.split('\n').length;
console.log(lines);

});
