// person @object
// 传值 简单数据类型 不会影响外面的
// 引用数据类型 传递的是地址 对这个对象的引用 
function test(person) {

    let obj = {
        ...person
    }
    obj.age = 26;

    // let person
    // person.age = 26; // 可读性不好， 
    // // person test函数中 地位？ 
    // // person 改成了新对象的地址
    // person = {
    //     name: 'yyy',
    //     age: 30
    // }
    // return person
}
// 对象 堆内存 地址
const p1 = {
    name: 'yck',
    age: 25
}

const p2 = test(p1);
console.log(p1);
console.log(p2);