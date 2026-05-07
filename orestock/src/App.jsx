import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Admin from './pages/Admin'
import Login from './pages/Login'
import ProtectedAdminRoute from './ProtectedAdminRoute'

import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={
          <ProtectedAdminRoute>
            <Admin />
          </ProtectedAdminRoute>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
