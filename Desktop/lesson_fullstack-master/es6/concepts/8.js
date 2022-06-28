const obj = {
    name: '111',
    food: '222',
    sex: '333'
}

// const food = obj.food;
// es6 提供了优雅的api 解构
const { name,food } = obj;
console.log(name, food);
// let name = '333';// let const不可以在同一个块级作用域重复声明

function introduct({name,food,sex}) {
    console.log(`${name}, 444喜欢${food} ${sex}`);
}

introduct(obj);

