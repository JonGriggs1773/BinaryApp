import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BinaryForm from './components/BinaryForm'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <BinaryForm />
    </>
  )
}

export default App
