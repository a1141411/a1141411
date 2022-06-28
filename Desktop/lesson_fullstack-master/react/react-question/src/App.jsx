import { useState } from 'react'
import './App.css'
import Dog from './Dog'
import Computer from './Computer'
import Notification from './Notification'

// 封装 Notification组件 未读的消息？
function App() {
  const [num, setNum] = useState(0)
  setTimeout(() => {
    setNum(2)
  }, 1000)
  return (
    <div className="App">
      {/* 自定义组件 <Dog></Dog> */}
      <Dog />
      <Computer />
      <Notification n={num} />
    </div>
  )
}

export default App
