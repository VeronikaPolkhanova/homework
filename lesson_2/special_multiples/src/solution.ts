export function countSpecMult(n : number, mxval: number): number {
  const primes: Array<number> = [];
  const numbers: Array<number> = [];
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
  for (let number = 1 ; number < mxval; number++) {
    let isValid = true;
    for (let index = 0; index < primes.slice(0, n).length; index++) {
      if (number % primes[index] !== 0) {
        isValid = false;
      }
    }
    if (isValid) {
      numbers.push(number);
    }
  }
  return numbers.length;
}
