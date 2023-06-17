import fs from 'node:fs';

const write = async () => {
  const ws = fs.createWriteStream('./files/fileToWrite.txt', 'utf-8');

  process.stdout.write('Input something here: \n');
  process.stdin.on('data', (data) => {
    ws.write(data);
    process.stdout.write(
      'You can input more or press CTRL+C to exit and save data to file \n'
    );
  });
};

await write();
