import * as fs from 'node:fs';

const rename = async () => {
  const wrongFileNamePath = './src/fs/files/wrongFilename.txt';
  const newFileNamePath = './src/fs/files/properFilename.md';
  const errorMsg = 'FS operation failed';

  fs.access(wrongFileNamePath, (err) => {
    if (err) {
      const error = new Error(errorMsg);

      console.error(error);
      return;
    }

    fs.access(newFileNamePath, (err) => {
      if (!err) {
        const error = new Error(errorMsg);

        console.error(error);
        return;
      }

      fs.rename(wrongFileNamePath, newFileNamePath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Rename complete!');
      });
    });
  });
};

await rename();
