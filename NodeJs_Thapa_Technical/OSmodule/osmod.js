const os=require('os');

const arch=os.arch();
console.log(arch);

const freem=os.freemem();
console.log(freem); //in bytes
console.log(`${freem/1024/1024/1024}`); //in gigabytes(GB)

const tfreem=os.totalmem();
console.log(tfreem); //in bytes
console.log(`${tfreem/1024/1024/1024}`); //in gigabytes(GB)

const hostname=os.hostname();
console.log(hostname);

const platform=os.platform();
console.log(platform);

const tmpdir=os.tmpdir();
console.log(tmpdir);

const type=os.type();
console.log(type);