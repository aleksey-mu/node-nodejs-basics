import { Transform, pipeline } from 'node:stream';

const transform = async () => {
  process.stdin.setEncoding('utf-8');

  const input = process.stdin;
  const output = process.stdout;

  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.toString().trim().split('').reverse().join('')}\n`);
    },
  });

  pipeline(input, reverseTransform, output, (err) => console.log(err));
};

await transform();
