// es6 reset 运算符
function sayHi(...args) {
    console.log(args);
    // 函数有this， auguments
    console.log(arguments);
    // this 指向
    // 严格模式 undefined
    // 数组环境  window || global
    // 手动绑定this
    console.log('Hillo', this.name);
}

// 
let yf = {
    name:'111'
};
// sayHi函数也是对象  call方法
// 第一个参数 指定this， 其余的参数， 交给函数本身作为参数
// sayHi.call(yf, 1, 2, 3); // 让普通函数运行， 但是指定this 指向   一个一个传参
sayHi.apply(yf, [1, 2, 3]);// 一定要是数组， 一组一组传



