import { Routes, Route } from 'react-router-dom'
import Classify from '@/pages/Classify'
import Home from '@/pages/Home'
import Miclub from '@/pages/Miclub'
import Mine from '@/pages/Mine'
import Shoppingcart from '@/pages/Shoppingcart'
// import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Search from '@/pages/Home/Search'
import Recommend from '@/components/Recommend'
import Intelligent from '@/components/Intelligent'
import Appliances from '@/components/Appliances'

const RoutesConfig = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
            <Route path="/recommend" element={<Recommend />}></Route>
            <Route path="/intelligent" element={<Intelligent />}></Route>
            <Route path="/appliances" element={<Appliances />}></Route>
        <Route path="/classify" element={<Classify />}></Route>
        <Route path="/miclub" element={<Miclub />}></Route>
        <Route path="/cart" element={<Shoppingcart />}></Route> 
        <Route path="/mine" element={<Mine />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    )
}

export default RoutesConfig