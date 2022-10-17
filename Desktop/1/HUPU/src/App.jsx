import { useState } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
import RoutesConfig from './routes'

function App() {
  return (
    <div className="App">
     <Header />
     <RoutesConfig />
     <Footer />
    </div>
  )
}

export default App
