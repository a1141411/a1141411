// 包装 String('1')
// class String 
let a = '1';
console.log(a.toString()); // a 被包装了一下， 实现了类型的转换， 变成了String类型
console.log(typeof a); // a 回归 string
console.log(typeof '1');
let b = new String('1');
console.log(b.toString());
console.log(typeof b); // object
// js 长久以来的一个bug， 32位系统， 为了性能考虑(typeof)， 使用低位存储变量的类型, null undefined
// console.log(typeof null);
console.log(undefined.toString());