/* 
%s == string
%d == numero
%j == JSON



*/

/* 
console.log("Un %s y un %s ", "perrito", "gatito");


console.info("hola mundo");
console.warn();

console.assert();

console.trace() */

const util = require('util')
const debuglog = util.debuglog("foo");

debuglog("hola de foo");

