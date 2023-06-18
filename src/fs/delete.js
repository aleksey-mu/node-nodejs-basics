import * as fs from 'node:fs';

const remove = async () => {
  fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
    if (err) {
      console.error(new Error('FS operation failed'));
      return;
    }

    console.log('File removed!');
  });
};

await remove();
