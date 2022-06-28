// 怎么创建数组？
// - 数据结构 代码的优化是有意义的
// - 平时开发中， 算法用的少一些
// - 为了面试 针对面试去学习 效率
// - 算题 leetcode 用js刷题
// 基本数据结构 访问第几个元素（行为）时间复杂度o（1）
// const arr = []; // easy way length 没定， itmes类型也没有定？ 随意
// 使用构造函数，可不是为了创建空数组那么无聊
// 数组比较好用， 相对于链表 
// const arr = new Array(7); // <7 empty items> item 类型？
// console.log(arr);
const arr = (new Array(7)).fill(1);
console.log(arr);
const a = (new Array(7)).filter(Number);
console.log(a);


