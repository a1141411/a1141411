import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import User from './User'
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // js跳转 BOM 原始
      // window.location.href = '/post/7090222005944844302'
      navigate('/post/7090222005944844302')
      // history.pushState(null, null, '/post/7090222005944844302')
    }, 2000)
  },[])
  return (
    <div className="App">
      <nav>
      <Link to="/post?id=8090222005944844301">文章</Link>
        <Link to="/post/7090222005944844302">文章</Link>
        <Link to="/user">用户</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/post' element={<Detail/>}></Route>
        <Route path='/post/:id' element={<Detail/>}></Route>
        <Route path='/user' element={<User />}></Route>
      </Routes>
    </div>
  )
}

export default App