// 解构 React Hooks
import React, { useState } from "react";

// 一个函数返回一段jsx
const App = () => {
  // let name = '崔豪';
  // state 状态
  // 当前组件添加一个状态 默认值
  // console.log(useState(1));
  // 解构
  let [isSingle, setIsSingle] = useState(true); // 单身
  let [name, setName] = useState('大帅豪'); // 给JSX 带来状态
  let [date, setDate] = useState(new Date().toLocaleTimeString());
  // JSX {} 占位符， 简单用法 输出值
  // {} 内就是js运行区域 结果默认输出
  setInterval(() => {
    setDate(new Date().toLocaleTimeString())
  }, 1000)
  const changeName = () => {
    // console.log('lalalala');
    setName('HAO')
  }
  const friends = [{
    name: '崔豪',
    age: 18
  }, {
    name: '兰文昊',
    age: 18
  }]
  return (
    <div>
      {/* JSX 简单 高效的UI 模板， 状态+时间+...... */}
      <p>{isSingle?<span>单身</span>:<span>有主</span>}</p>
      <h1>hello {name}</h1>
      <h2>现在是{date}</h2>
      <ul>
        {
          friends.map(friend => <li>{friend.name}-{friend.age}</li>)
        }
      </ul>
      <button onClick={changeName}>显示英文名</button>
    </div>
  )
}

export default App;