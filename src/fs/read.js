import * as fs from "node:fs";

const read = async () => {
  const filePath = "./files/fileToRead.txt";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const error = new Error("FS operation failed");

      console.error(error);
      return;
    }

    console.log(data.toLocaleString());
  });
};

await read();
