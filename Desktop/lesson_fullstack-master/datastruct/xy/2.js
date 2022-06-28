// 访问数组的元素？ index
// arr[0]
// 遍历？
const arr = [1,2,3,4,5,6,7,8,9,0];
const len = arr.length;
// for(let i = 0;i < arr.length; i++) {} // 不推荐
// 更快o(n) 更省
// for(let i = 0; i < len; i++) { // 性能更好 面向机器
//     console.log(arr[i],i); // 值和下标
// }
// let i = 0;
// for (let item of arr) { // 可读性好 写业务代码用这个 es6 代码可读性好
//     console.log(item,i);
//     i++;
// }
// 遍历时数据结构的特定行为
// arr.forEach((item,index) => {
//     console.log(item,index);
// })

arr.map((item,index) => {
    // 再加工
    console.log(item,index);
    return item + 1;
})





