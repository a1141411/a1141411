function func(num) {
    // this指向谁
    // 1. new    this -> 实例 大写作为构造函数  约定
    // 2. window || global || use strict
    // 3. call || apply
    this.count++; // 实例， 不属于类
}
var count = 5;
let obj = new func(1);
console.log(obj instanceof func);
// func 一等对象 既是函数也是对象 count属性属于fubc 自己的
func.count = 0; // 不会影响this 类的静态属性， 
func(0); // 普通函数的方式运行
console.log(func.count); // 一点关系都没有