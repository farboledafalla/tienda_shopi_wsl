import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-3xl font-bold text-green-600'>
      Hola Mundo!!!
    </div>
  )
}

export default App
