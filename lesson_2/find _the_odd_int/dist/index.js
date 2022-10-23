/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/* eslint-disable no-console */
const commander_1 = require('commander');
const solution_1 = require('./solution');
commander_1.program.option('-arr, --array <numbers...>', 'values array');
commander_1.program.parse();
const options = commander_1.program.opts();
const params = options.array.map((it) => Number(it));
console.log(`Result for ${params} array is ${(0, solution_1.findOdd)(params)}`);
