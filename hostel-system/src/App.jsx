import { useState } from 'react'
import Home from './components/Home'
import './external.css'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
  )
}

export default App
