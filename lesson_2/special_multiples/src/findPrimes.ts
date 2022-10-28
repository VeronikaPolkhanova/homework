export function findPrimes(n: number, mxval: number) : number[] {
  const primes: number[] = [];
  for (let i = 1; i <= mxval; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        primes.push(i);
      }
    }
    if (primes.length === n) {
      break;
    }
  }
  return primes;
}
