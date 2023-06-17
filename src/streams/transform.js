const transform = async () => {
  process.stdin.setEncoding('utf-8');
  process.stdin.on('data', (data) => {
    process.stdout.write(data.split('').reverse().join(''));
  });
};

await transform();
