import FeaturedCollections from './components/FeaturedCollections'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Pack from './components/Pack'
import Products from './components/Products'
import './style/style.css'

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <FeaturedCollections/>
      <Products/>
      <Pack/>
    </>
  )
}

export default App
