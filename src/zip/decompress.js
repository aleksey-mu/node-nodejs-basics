import fs from 'node:fs';
import * as zlib from 'node:zlib';

const decompress = async () => {
  const rs = fs.createReadStream('./src/zip/files/archive.gz');
  const ws = fs.createWriteStream('./src/zip/files/fileToCompress.txt');
  const gzip = zlib.createGunzip();

  rs.pipe(gzip).pipe(ws);
};

await decompress();
