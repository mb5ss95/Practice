const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(number => number * number);
// (method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]

// const result = numbers.map((number) => number * number);

console.log(numbers);
// [1, 2, 3, 4, 5];

console.log(result);
// [1, 4, 9, 16, 25]

