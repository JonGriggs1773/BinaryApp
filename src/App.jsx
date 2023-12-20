import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DecimalForm from './components/DecimalForm'
import BinaryForm from './components/BinaryForm'
import Navbar from './components/Navbar'
import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<BinaryForm />} />
                    <Route path="/decimal" element={<DecimalForm />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
