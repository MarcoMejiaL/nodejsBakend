const {Transform} = require('stream');
const transformStram = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase())
        callback();
    },
})

process.stdin.pipe(transformStram).pipe(process.stdout);
