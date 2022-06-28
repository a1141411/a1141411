// 1. 简单数据类型 除了null之外 结果都是靠谱的
    // js 里面一直有个bug
    // 32位 二进制  拿出一位做符号位
    // ‘a' 二进制 ascii 65 -> 10 -> 二进制 拿出三位表示类型
    // null 类型的前三位是 000
    // object 类型前三位也是000
    // typeof 
// console.log(typeof null); // Obj 简单 object
// console.log(typeof 1, typeof 'ss', typeof undefined, typeof false);
// 怎样判断一个变量是 null
const isUndefined = val => typeof val === 'undefined';
const isNull = val => val === null;
const isNil = val => val === undefined || val === null; 
let a;
let b = null;
// if()
// console.log();
// console.log(isUndefined(a));



