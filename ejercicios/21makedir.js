const fs = require('fs');

fs.mkdir("platzi/escuela/paquito",{recursive:true},(err)=>{
    if(err){
        console.log(err);
    }
});