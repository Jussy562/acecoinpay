import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkout from './pages/checkout/Checkout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-12 py-20'>
      <Checkout />
        
    </div>
  )
}

export default App
