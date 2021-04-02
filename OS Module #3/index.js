const os = require('os');

console.log(os.hostname());
console.log(os.homedir());
console.log(os.arch());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
console.log(`Free Memory: ${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory / 1024 / 1024 / 1024}`);
