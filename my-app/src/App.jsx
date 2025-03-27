import { Routes, Route } from "react-router";
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
import CateringSection from './components/CateringSection'
import AnimationTwo from './components/AnimationTwo'
import AnimationThree from './components/AnimationThree'
import Footer from './components/Footer'
import BuildAbox from "./pages/BuildAbox";
import AddToCart from "./pages/AddToCart";
import CheckOut from "./pages/CheckOut";
import GoldenCollection from "./pages/GoldenCollection";


function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <FeaturedCollections />
            <Products />
            <Animation />
            <Pack />
            <Carusel />
            <PressMentions />
            <ProductShowcase />
            <CateringSection />
            <AnimationTwo />
            <AnimationThree />
            <Footer />
          </>
        } />

        <Route path="build" element={<BuildAbox />} />
        <Route path="addTocart" element={
          <>
            <AddToCart />
            <Footer />
          </>
        } />
        
        <Route path="checkOut" element={
          <>
            <CheckOut/>
            <Footer/>
          </>
        }/>

        <Route path="goldenCollection" element={
          <>
            <GoldenCollection/>
            <AnimationThree/>
            <Footer/>
          </>
        }/>




      </Routes>
    </>
  )
}

export default App
