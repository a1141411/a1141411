function Cat(name, color) {
    this.name = name;
    this.color = color;
    // 浪费内存， 共享
    // 需要指向一个新的， 构造函数之外的
    // this.type = '猫科动物';// 不会改变的属性
    // this.eat = function() {
    //     console.log('eat 老鼠');
    // }
}
// 1. 省内存
// 2. 所有实例共享prototype对象上的属性和方法
// 3. 实例他是如何共享prototype对象的呢？
// 4. this -> constructor + prototype 上的
// 如何区分 对象本身的属性(constructor), prototype 对象上的属性
Cat.prototype.eat = function() {
    console.log('eat 老鼠');
}
Cat.prototype.type = '猫科动物';

let cat1 = Cat('Tom', '黑色'); // 从内存的角度看， 分配了一个新的内存空间
let cat2 = Cat('小灰', '灰色'); 

console.log(cat1.hasOwnProperty('name'),cat2.hasOwnProperty('type'));     
// 首先到ownProperties去查找， 如果有， 返回 ，可能没有， 继续到prototype对象上去找
// js 是通过什么语法来实现的呢？ __proto__ 只要在原型对象上， 也可以直接调用
console.log(cat2.type, cat2.type, cat2.__proto__.type);
// Object 的 所有的实例最后会指向object 原型链
console.log(cat2.toString());
console.log(cat2.__proto__.__proto__.__proto__);

