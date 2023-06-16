import crypto from 'node:crypto';
import fs from 'node:fs';

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');
  const stream = fs.createReadStream('./files/fileToCalculateHashFor.txt');

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });

  stream.on('end', () => {
    const hashString = hash.digest('hex');
    console.log(`SHA256 hash: ${hashString}`);
  });
};

await calculateHash();
