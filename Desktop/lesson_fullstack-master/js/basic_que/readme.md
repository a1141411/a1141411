# JS 基础知识高级理解

## 引用式赋值
1. 函数传参，引用式赋值，有可能修改外面的值。
2. 引用式赋值 拿到的是内存地址 
3. 函数的参数也是属于当前函数作用域的变量
    js 中任何变量都是有作用域的
4. const 只是可以发生改变的
5. 重新申请对象， 得到新的地址，交给person， 与p1 就断开了
6. 函数执行期间，会修改外部变量，副作用(坏)， 不是一个纯函数，
    相反 函数不会影响外面的话，就是一个纯函数