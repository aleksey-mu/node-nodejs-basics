import fs from 'node:fs';

const read = async () => {
  const rs = fs.createReadStream('./files/fileToRead.txt', 'utf-8');
  let data = '';

  rs.on('data', (chunk) => (data += chunk));

  rs.on('end', () => process.stdout.write(data));
};

await read();
