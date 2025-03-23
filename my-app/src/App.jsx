import FeaturedCollections from './components/FeaturedCollections'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Animation from './components/Animation'
import Products from './components/Products'
import './style/style.css'
import Pack from './components/Pack'
import Carusel from './components/Carusel'
import PressMentions from './components/PressMentions'
import ProductShowcase from './components/ProductShowcase'

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <FeaturedCollections/>
      <Products/>
      <Animation/>
      <Pack/>
      <Carusel/>
      <PressMentions/>
      <ProductShowcase/>
    </>
  )
}

export default App
