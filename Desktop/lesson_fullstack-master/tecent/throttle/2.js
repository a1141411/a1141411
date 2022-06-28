// call(thisObj, param1, param2...)
// 手写 call 方法 属于函数
// 函数关键字  Object（对象） Array（数组）
Function.prototype.call2 = function(...args) {
    // console.log('call2', thisObj, args);
    let thisObj = args[0]?args[0]:null;
    console.log(args.slice(1));
    // console.log(args, '////');
    // args.shift();// 删掉第一个
    // console.log(args);
}
let yf = {
    name:'111'
};
function func() {

}
// call 第一个参数等下是函数里的this
// 余下的参数交给call2
func.call2(yf, 1, 2);
// func.call(yf);
console.log(func.__proto__);
console.log(func instanceof Function);
console.log(Function);


