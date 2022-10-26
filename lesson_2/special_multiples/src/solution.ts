import { findPrimes } from './findPrimes';

export function countSpecMult(n: number, mxval: number): number {
  const primes: number = findPrimes(n, mxval).slice(0, n).reduce((acc, cur) => acc * cur, 1);
  return Math.floor(mxval / primes);
}
