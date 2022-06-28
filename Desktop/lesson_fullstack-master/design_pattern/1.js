// 创建单列 Singleton
// 立即执行函数是创建闭包的手段之一
let CreateSingleton = (function() {
    console.log('创建单列');
    // 多了一层作用域 作用域链
    let instance; // 实例
    return function(name) { // constructor
        if (instance) { // 之前实例过
            return instance;
        }
        this.name = name;
        return instance = this;
        // instance = this;
        // return this
    }
})()

CreateSingleton.prototype.getName = function() {
    console.log(this.name);
}

// 惰性
let singleton =new CreateSingleton('111');
let dalao = new CreateSingleton('222');
// console.log(singleton.name);
console.log(singleton === dalao);
console.log(singleton.getName());
console.log(dalao.getName());