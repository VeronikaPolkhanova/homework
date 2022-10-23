/* eslint-disable @typescript-eslint/no-unused-vars */
export function findOdd(A: Array<number>): number {
  const countItems = A.reduce((acc: { [key: string]: any }, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  let result: any;

  for (const key in countItems) {
    if (countItems[key] % 2 !== 0) {
      result = Number(key);
    }
  }
  return result;
}

