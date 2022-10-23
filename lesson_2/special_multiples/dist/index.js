/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/* eslint-disable no-console */
const commander_1 = require('commander');
const solution_1 = require('./solution');
commander_1.program
  .option('-c, --count <value>', 'count of primes')
  .option('-m, --max <value>', 'max value');
commander_1.program.parse();
const options = commander_1.program.opts();
console.log(`Amount of numbers that have the first ${options.count} primes as factors below a ${options.max} is ${(0, solution_1.countSpecMult)(Number(options.count), Number(options.max))}`);
