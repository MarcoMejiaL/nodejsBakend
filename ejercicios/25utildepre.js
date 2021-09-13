const util = require('util');

const holapluto=util.deprecate(()=>{
    console.log('hello pluto');
}, 'pluto is deprecated, is not a plante anymore')

holapluto();