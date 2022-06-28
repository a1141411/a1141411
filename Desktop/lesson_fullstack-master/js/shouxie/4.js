// 如何去重
const array = [1,2,3,5,1,5,9,1,2,8]; // 有重复项

const uniqueArray = (arr) => {
    let res = [];
    // O(n^2)
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        console.log(temp);
        if (!Map.hasOwnProperty(temp)) {
            map[temp] = i;
            console.log(map);
            res.push(temp);
        }
        // O(n)
        // if (res.indexOf(temp) == -1) {
        //     res.push(temp);
        // }
    }
    return res;
}

console.log(uniqueArray(array));

// call 指定函数的this -> 第一个参数
// call 借
// console.log(typeof array, Object.prototype.toString.call(array));
// console.log(Array.isArray(array));