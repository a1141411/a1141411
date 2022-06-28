function sayHi() {
    console.log('Hillo,', this.name);
}

var person2 = {
    name:'111',
    sayHi: sayHi
}

var person1 = {
    name:'222',
    friend: person2
}
// 当函数作为对象的方法时， this指向这个对象， 当前对象是person2
var obj = person1.friend;
obj.sayHi();
// person1.friend.sayHi();


