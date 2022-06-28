const spread = [12,5,8,8,130,44,130];
// filter unique
const uniqueArr = spread.filter((item, index, arr) => {
    // 重复项就flase
    return arr.indexOf(item) == index;
})
console.log(uniqueArr);
// es6新的数据结构
let set = new Set(spread);
const arr = [...set]
console.log(Object.prototype.toString.call(set),arr);

// 不要重复造轮子