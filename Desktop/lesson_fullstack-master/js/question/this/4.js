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

var func = obj.hi; // 普通函数
// func.call(obj);
// 指定this， 并且返回一个新的函数
// bind 为了稍后执行而准备的
func.bind(obj)();



