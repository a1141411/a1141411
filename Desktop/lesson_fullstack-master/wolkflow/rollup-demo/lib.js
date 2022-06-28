// lib 库
var counter = 3;
function incCoumter() {
    ++counter;
}
module.exports = {
    // counter,
    // 方法
    get counter() {
        return counter;
    },
    incCoumter
}