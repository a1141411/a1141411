// 本身
// 两个世界 函数[call] 构造函数[constructor]
// [call] this 指向全局
// [constructor] this 指向 实例 默认返回值
'use strict' // 使用严格模式

function Dog(type) {
    console.log(this);
    this.type = type;
}
// 心流时刻
// 函数都有this， 不管是以什么方式运行的
// this是一个指针， 和运行方式相关
Dog();  // 普通函数  内部有this吗？ 跟当前运行坏境相关  node后端坏境
// new 关键字 运算符关键字
// let dog = new Dog();// this指向 实例化后的对象 作为构造函数来使用

