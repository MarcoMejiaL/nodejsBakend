const {Writable} = require('stream');
const writableSting = new Writable({
    write(chunk, encoding, callback){
        console.log(chunk.toString());
        callback();
    }
})

process.stdin.pipe(writableSting)