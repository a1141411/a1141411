var obj = {
    // es6 对象字面量的简写方式
    hi() {
        // this 作为对象方法调用 指向obj
        // 
        console.log(this, '---------');
        // 返回值是函数， 当返回值是函数的话， 叫做高阶函数
        // 是个箭头函数， 里面没有this
        return () => {
            console.log(this, '+++++++++');
        }
    },
    sayHi: function () {
        return function () {
            console.log(this);

            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}

// const func = obj.hi; // 赋值
// func(); // 调用方式是普通函数
// 返回箭头函数时 this -> window
// const innerFunc = func();
// innerFunc();
// 返回箭头函数时 this -> obj
obj.hi()()


