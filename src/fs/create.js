import * as fs from "node:fs";

const create = async () => {
  const fileName = "files/fresh.txt";
  const content = "I am fresh and young";

  fs.readFile(fileName, (err, data) => {
    if (data) {
      const error = new Error("FS operation failed");

      console.error(error);
      return;
    }

    fs.writeFile(fileName, content, (err) => {
      err ? console.error(err) : console.log("File created!");
    });
  });
};

await create();
