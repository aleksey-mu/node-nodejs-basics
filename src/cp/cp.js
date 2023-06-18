import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const childPath = './src/cp/files/script.js';
  fork(childPath, args);
};

spawnChildProcess(['number', 2, 'string']);
