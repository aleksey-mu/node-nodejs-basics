import fs from 'node:fs';
import * as zlib from 'node:zlib';

const decompress = async () => {
  const rs = fs.createReadStream('./files/archive.gz');
  const ws = fs.createWriteStream('./files/fileToCompress.txt');
  const gzip = zlib.createGunzip();

  rs.pipe(gzip).pipe(ws);
};

await decompress();
