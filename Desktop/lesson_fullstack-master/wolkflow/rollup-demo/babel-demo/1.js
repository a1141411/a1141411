const a = 1; 
// @babel/
const s = Symbol();
{
    let b = 2;
}
const func = () => `aaa`;
// var a = 1;
// es6 ie9以前 -ms
// 大胆的使用新语法， 转移后， 兼容良好
// 工程化(node) 文件的模块化合并， es6 转es5 工具 babel
// npm i @babel/cli @babel/core @babel/preset-env --save-dev 开发依赖
// - @babel/cli babel 的命令行工具
// - @babel/core Babel 转义的核心
// - @babel/preset-env + .babelrc(配置文件) 预处理
// - --save-dev