// 90年代末 浏览器简单的业务 js发现 -> es5(jQuery) -> es6(现代js react, babel) 
// Promise -> es7 async await
// async await  es7提供
// 异步同步化方案 回调 地狱
// promise 是es6提供的异步同步化方案 then()
// es7还要提供新的方案呢？ then有不完美的地方

function f1(cb) {
    setTimeout(function() {
        console.log('f1-------------');
        cb();
    }, 1000)
}

function f2(cb) {
    setTimeout(function() {
        console.log('f2--------');
        cb();
    }, 2000)
}

function f3(cb) {
    setTimeout(function() {
        console.log('f3--------');
        cb();
    }, 2000)
}

function f4() {
    console.log('f4--------');
}
// 回调地狱 异步任务队列(长)， 保证顺序
// 可读性不太好
f1(function() {
    f2(function() {
        f3(f4)
    })
})