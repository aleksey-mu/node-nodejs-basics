import { Worker } from 'node:worker_threads';
import * as os from 'node:os';

const performCalculations = async () => {
  const threadCount = os.cpus().length || 2;
  const threads = new Set();
  const resultArray = [];
  console.log(`Running with ${threadCount} threads...`);

  let startNumber = 10;

  for (let i = 0; i < threadCount; i++) {
    const numberToCheck = startNumber;
    threads.add(new Worker('./worker.js', { workerData: { numberToCheck } }));
    startNumber += 1;
  }

  for (let worker of threads) {
    worker.on('error', (err) => {
      resultArray.push({ status: 'error', data: null });
      checkEnd();
      throw err;
    });
    worker.on('message', (result) => {
      resultArray.push({ status: 'resolved', data: result });
      checkEnd();
    });
  }

  const checkEnd = () => {
    if (resultArray.length === threadCount) {
      console.log(resultArray);
    }
  };
};

await performCalculations();
