# 前端珠峰-- 阮一峰

## 面向对象

- js编程最难的事情
    对象
- js的面向对象
    1. js是一种基于对象的语言
    2. js又不是一种真正的面向对象(oop)语言
        关键字 早期，js 不提供 class, implements, extend(继承), public private， static
        基于原型式的面向对象   function + this + prototype

- 生成实例对象的原始模型
    js内置的对象字面量
        1. 繁琐 ->
        2. 没有什么约束

- 构造器模式
    1. 构造函数， 封装实例化 赋值属性的过程， 首字母大写 + this + new (JS语言的设计)
    js 是面向对象的语言， 但是不同于普通的 OOP， 一切皆对象， 面向对象式编程更纯粹
    为了简化实例化过程， 使用函数封装， this指向会返回的实例， new  this指向实例

    缺点是？
        

- 弹性布局太爽了， 因为在弹性内部， 格式上下文是弹性 ？ display： flex； BFC概念
    flex 做两列， 三列， 自适应， 简单
    缺点， 浏览器兼容性比较差 ie9以前不支持

- float 浮动，
    1. 浮动， 离开文档流， margin-left | margin-rinht 不重叠
    2. BFC 当我们给main加一个overflow：hidden， 感知到兄弟元素一样 css 加了一个overflow：hidden，启用了格式化上下文之BFC原则，
    main元素进入全新的上下文context(环境)



