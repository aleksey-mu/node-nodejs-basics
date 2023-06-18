import fs from 'node:fs';
import * as zlib from 'node:zlib';

const compress = async () => {
  const rs = fs.createReadStream('./src/zip/files/fileToCompress.txt');
  const ws = fs.createWriteStream('./src/zip/files/archive.gz');
  const gzip = zlib.createGzip();
  
  rs.pipe(gzip).pipe(ws);
};

await compress();
