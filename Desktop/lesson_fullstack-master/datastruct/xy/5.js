// 二维数组
const outerLen = arr.length;
// 计算循环 性能更好
for(let i = 0; i < len; i++) {
    const innerLen = arr[i].length;
    for (let j = 0; j<innerLen; j++) {
        console.log(arr[i][j],i,j);
    }
}