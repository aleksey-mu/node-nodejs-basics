import fs from 'node:fs';
import * as zlib from 'node:zlib';

const compress = async () => {
  const rs = fs.createReadStream('./files/fileToCompress.txt', 'utf-8');
  const ws = fs.createWriteStream('./files/archive.gz');
  const gzip = zlib.createGzip();
  
  rs.pipe(gzip).pipe(ws);
};

await compress();
