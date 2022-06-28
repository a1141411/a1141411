// 引入react 框架， 叫React
// import from es6 模块化方案
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // css 也可以用import 
import App from "./App"; // 引入了一个根组件模块

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
