const zlib = require('zlib');

const fs = require('fs');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('./test.txt');
const out = fs.createWriteStream('big.file.txt.gz');

inp.pipe(gzip).pipe(out);