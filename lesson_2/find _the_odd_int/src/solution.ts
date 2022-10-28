export function findOdd(arr: number[]): number {
  const countItems = arr.reduce((acc: { [key: string]: number }, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  let result: number = 0;

  for (const key in countItems) {
    if (countItems[key] % 2 !== 0) {
      result = Number(key);
    }
  }
  return result;
}

