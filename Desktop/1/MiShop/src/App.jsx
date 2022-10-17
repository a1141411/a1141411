import './App.css'
// import Header from './components/Header'
import Footer from './components/Footer'
import Search from './pages/Home/Search'
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      <Search />
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App
