const parseArgs = () => {
  const args = process.argv;
  const paramsArray = [];

  for (let i = 2; i < args.length; i = i + 2) {
    paramsArray.push(
      `${args[i].slice(2, args[i].length - 1)} is ${args[i + 1]}`
    );
  }
  console.log(paramsArray.join(', '));
};

parseArgs();
