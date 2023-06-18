import * as fs from 'node:fs';

const copy = async () => {
  const filesPath = './src/fs/files';
  const copyPath = './src/fs/files_copy';
  const errorMsg = 'FS operation failed';

  fs.access(filesPath, (err) => {
    if (err) {
      const error = new Error(errorMsg);

      console.error(error);
      return;
    }

    fs.access(copyPath, (err) => {
      if (!err) {
        const error = new Error(errorMsg);

        console.error(error);
        return;
      }

      fs.cp(filesPath, copyPath, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
        console.log('Files copied!');
      });
    });
  });
};

await copy();
