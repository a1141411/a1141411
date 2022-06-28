// 重复了， 违反了DRY
const name = 'Snickers';
const age = 2;
// console.log('My dog' + name + 'is' + age + 'years old');
const name2 = 'egg';
const age2 = 1;
// console.log('My dog' + name2 + 'is' + age2 + 'years old');
// 函数表达式
// 构造函数 首字母大写
// 匿名函数
// 箭头函数 不需要function 关键字 return关键字也可以不要
// 如果函数体只有一句代码， 并且是返回值的话 可以省略花括号
const sayMyDog = (name,age) => `My dog  ${name}  is  ${age}  years old`;
    // es6 提供了字符串模板功能
    // return `My dog  ${name}  is  ${age}  years old`;
    // return 'My dog' + name2 + 'is' + age2 + 'years old';

console.log(sayMyDog(name, age));