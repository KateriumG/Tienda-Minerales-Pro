import { useState } from 'react'

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'

import './styles/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
