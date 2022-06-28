// es6 可以给函数默认值
function Person(name = '未命名', age) {
    this.name = name;
    thismage = age;
    // this.count = '111';
}
// 面向对象里， 叫做类的静态属性 static 描述类的， 而不是描述实例的
Person.count = 0; // 类， 构造函数的
Person.species = '人类';
Person.prototype = {
    num: 1,
    count: 111
}
let sm = new Person();
console.log(sm.count);
// console.log(sm.name);
// let sm2 = new Person('小红');
// console.log(sm2.name);

