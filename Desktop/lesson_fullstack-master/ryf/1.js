let a = 1.236;
// 奇怪的地方？JS比较复杂，
// a number 简单数据类型 不是对象
// a.toFixed 对象
// 在js中， 基于对象(object-base)的语言
// toFixed(a);
// 你遇到的所有东西几乎都是对象， 编程风格
// console.log(a.toFixed(2));
var n1 = new Number(2);// 
console.log(n1, typeof n1, n1.valueOf());
// console.log(typeof null); // bug 32位 前三位都是000
// console.log(typeof a, 0.1 + 0.2);