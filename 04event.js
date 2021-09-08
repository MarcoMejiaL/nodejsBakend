const EventEmiter = require('events');

class Logger extends EventEmiter{
    execute(cb){
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('after');
    }
}
const logger =new Logger();
logger.on('start',()=>console.log('Starting'))
logger.on('finish', ()=>console.log('finish'));
logger.on('finish', ()=>console.log('done'));

logger.execute(()=>console.log('hello world'))