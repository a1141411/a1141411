- 阿里有多少程序员？
    8-10万
    阿里云  5000  30万行代码

    1. 组织代码？
        - 接口
        - 块级作用域 if for while
        - 功能分模块，把一个大事情分成小事情， 倒推， 写完了
            1. 函数     函数式编程
            2. 类       面向对象
            - 如果会写代码， 砌墙的
            - 如果会分工的话， 包工头

## 面向对象编程
    JS 有点不一样 {} obj.a
    传统的面向对象 23种设计模式
    类 （模板）（抽象）  对象（具象）
    new 要类 实例化
    { } 对象字面量

    类是（class）是对象（Object）的模板， （公共） 定义了 同一组对象的 公共的属性和方法

- JS本没有类(原型),但传统的面向对象思想(珍珠), 如何用上呢?
    1. 构造函数里面的 this 属性 + 方法
        当函数以new 的方式 运行时, this 指向实例添加属性和方法
    2. 进化成 Cat.prototype.makeSound()
        函数也是对象
        prototype 对象上可以添加方法

- new 构造函数  结果 实例
    构造函数和实例有什么关系
    通过实例找到构造函数
    xm.constructor 任何实例对象上都拥有一个constructor属性指向 实例的构造函数
    构造函数 内部不去加方法,原因是省内存空间的分配
     构造函数 + prototype 对象 = 类的构建

    任何函数上都有一个prototype对象, 所有实例共享的方法
    共享单车 
    JS 面向对象 三角恋关系

    class { Constructor + 方法集合 }    汽车
    类 Constructor(构造函数)(属性) + Prototype(原型对象)(方法)  火车  = 实例 Object







