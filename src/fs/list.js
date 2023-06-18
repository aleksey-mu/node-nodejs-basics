import * as fs from 'node:fs';

const list = async () => {
  const dir = './src/fs/files';

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(new Error('FS operation failed'));
      return;
    }

    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
