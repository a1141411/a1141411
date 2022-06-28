// 语言第四章 函数
// 当函数名大写,表示为构造函数
// js 函数就可以构造一个类
// JS 早期没有class关键字
// 但并不影响它做java的传统面向对象编程
// 函数是一等对象, 可以用来构造对象
// js 其实没有类
function Cat(name) {
    // 给一组对象添加属性
    this.name = name;
    // 内存开销 复杂得多 入栈, 分配堆内存
    // this.makeSound = function() {
    //     console.log('喵喵喵');
    // }
}
// 是一个构造对象的函数
// 函数也是对象
// js 函数对象有prototype属性
// 公有的方法放到prototype 对象中
Cat.prototype.makeSound = function() {
        console.log('喵喵喵');
    }
    Cat.prototype.eat = function() {
        console.log('吃鱼');
    }
    Cat.sayHi = function() {
        console.log('你好啊');
    }
// 同一组对象 共同的类方法 属性模板
var xm = new Cat('小黑');
xm.makeSound();
console.log(xm.name);
// xm.sayHi();// 不能调用
// var xh = new Cat('小花');
// console.log(xm == xh);
// // 判断两个对象是兄弟
// console.log(xm.constructor == xh.constructor);
// // typeof [] Object 判断是什么类型
// // 判断对象是某类的实例
// console.log(xm instanceof Cat);
// // Object 既是对象又是函数
// // 函数是一等对象
// let a = {}; // 对象字面量的构造函数Object()
// let obj = new Object();
// console.log(obj instanceof Object);// 对象字面量
// console.log(typeof Object);
console.log(Cat.prototype);



