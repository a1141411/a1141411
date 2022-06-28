import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// root 节点 根节点？
// root 节点范围内react 起作用
// html -> js 
// JSX js 扩展语法， 只在react 中生效
// React 用来表达UI组件
// JSX 优点 UI
// `<li>
//   <span>dfdfdfdfdfd</span>
// </li>`
// JSX class 不能用， 得用className
// js class ？ 关键字
// let name = '孽障';
// // JSX 模板
// const element = <h1 className='nie-bd'>Hello, {name}!</h1>
// // 自定义组件
// const Hello = () => {
//   // JSX
//   return <div>Hello {name}</div>
// }
// obj Proxy
// let [dataStr, setDataStr] = useState();
let dataStr = new Date().toLocaleTimeString();
setInterval(() => {
  dataStr = new Date().toLocaleTimeString();
}, 1000)
ReactDOM.createRoot(document.getElementById('root')).render(
  // element
  // <Hello></Hello>
  // UI 大舞台
  <div>
    <h1>Hello, world</h1>
    <h2>现在是{dataStr}</h2>
  </div>
)
