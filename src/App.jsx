import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/product'
import About from './pages/about'
import Categories from './components/Categories'
import ElectronicsProduct from './pages/ElectronicsProduct'
import FashionProduct from './pages/FashionProduct'
import Sports from './pages/Sports'
import HomeKitchen from './pages/HomeKitchen'

const App = () => {
  return (
   <>
    <Navbar />
    <div className='flex items-center justify-between '>

    <Categories />
    <div className='w-full h-[100vh] overflow-y-scroll p-20'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/about' element={<About />} />
      <Route path='/product/electronics' element={<ElectronicsProduct />} />
      <Route path='/product/fashion' element={<FashionProduct />} />
      <Route path='/product/sports' element={<Sports />} />
      <Route path='/product/homekitchen' element={<HomeKitchen />} />
    </Routes>

    </div>
    </div>
   </>
  )
}

export default App