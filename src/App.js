import { BrowserRouter,Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './components/Home';
import Cart from './components/Cart';
import Header from './components/Header'

const App = () => {
 return (
      <BrowserRouter>
        <Header />
        <Routes>
          < Route exact path="/" element={<Home />}/>
          < Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App