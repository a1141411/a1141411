// 1. 数组和对象字面量， 类型都是Object， 除了简单数据类型， 其他的都是对象
// 2. 数据容器
// 3. 数组是用整数做下标 连续的 0~arr.length-1
//     对象是key: value   
// 数组是可遍历（索引）的对象

const arr =[1,2,3,4,5];
// console.log(Object.prototype.toString.call(arr));
// console.log(typeof arr);
console.log(Array.isArray(arr));

let obj= {
    name: '刘二',
    sex:'女',
    hometown: '南昌',
    hobbies:['打球','看书']
}
// console.log(typeof arr)

// callback 
// 第一个是数组里的每一项
// 第二个是序号 index
// arr.forEach(function(item,index) {
//     console.log(item,index);
// })

// for in 有点慢
// for (let i = 0; i<arr.length; i++){ // 计数循环 快 机器思维的代码 面向cpu编程
//     console.log(arr[i]);
// }
// 可读性更好 ， 面向人类的编程
// for (let item of arr) { // 新的es6 方案
//     console.log(item);
// }
// for(let a in arr){
//     console.log(a);
// }
// 对象的遍历里面

// for (let key in obj) {
//     console.log(key);
// }