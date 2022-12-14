/* eslint-disable no-console */
import { program } from 'commander';
import { findOdd as solution } from './solution';

program.option('-arr, --array <numbers...>', 'values array');

program.parse();

const options = program.opts();

const params: number[] = options.array.map((it: string) => Number(it));
console.log(`Result for ${params} array is ${solution(params)}`);
