/* eslint-disable no-console */
import { program } from 'commander';
import { countSpecMult as solution } from './solution';

program
  .option('-c, --count <value>', 'count of primes')
  .option('-m, --max <value>', 'max value')
;

program.parse();

const options = program.opts();

console.log(`Amount of numbers that have the first ${options.count} primes as factors below a ${options.max} is ${solution(Number(options.count), Number(options.max))}`);
