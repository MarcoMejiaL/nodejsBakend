const os = require ('os');

/* console.log('CPU Info', os.cpus()); */

/* console.log('IP address', os.networkInterfaces().lo.map(i => i.address)) */
console.log('Free Memory ', (os.freemem()/1024)/1024);
console.log('type', os.type());
console.log('version', os.release());
console.log('User Info', os.userInfo())