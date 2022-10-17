import { Routes, Route } from 'react-router-dom'
import Header from '../pages/Header'
import Home from '../pages/Home'
import Search from '../pages/Search'

const RoutesConfig = () => {
    return (
        <Routes>
          <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    )
}

export default RoutesConfig