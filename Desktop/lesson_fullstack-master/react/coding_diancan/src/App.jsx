import { useState } from 'react'
import './App.css'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Order from './pages/Order'

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App