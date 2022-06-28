# JS 送花
## talk in JS

1. js运行在浏览器代理中（url）， 宿主环境（window 全局对象）
    - typeof window 对象 生而知之 
    - a b name 全局作用域
    - c 声明在函数中 局部作用域 函数局部作用域

- es6 let const 与 var
    1. 相同，属于声明所在的作用域
        直接用变量名来直接访问
        a,
        b,
        name
    2. var 会自动挂载在window对象
        其实是副作用，不太对的，
        window.a The Bad parts 不好的
        以后就不用了吧 let 完全可以取代
    3. let const 不会挂载在window对象上
    4. const 常量 值不可以修改
        1. 如果是简单数据， 值不可以改变
        2. 如果是复杂数据， 只可以改变，数据类型不可以改变