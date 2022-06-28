// number类型， 但是要排斥NaN
const isNumber = val => typeof val === 'number' && val === val;

// console.log(isNumber('2'));
// NaN（这不是这个数组） 类型是 number
console.log(2 === 2);
console.log(NaN == NaN);
console.log(isNumber(2));
console.log(typeof NaN);

