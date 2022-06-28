// 对象 类型转换
const obj = {
    value: 1,
    valueOf() {
        return 1;
    }
}
// new NNumber(1) .toFixed()
console.log(obj==1);