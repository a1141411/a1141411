let var1 = {name: '111'};
let var2 = var1;// 给的不是值， 是地址
var2.name = '222';
console.log(var2);
console.log(var1);// 跟直觉不一样
