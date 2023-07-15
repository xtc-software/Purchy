import { BiBell } from "react-icons/bi"
import { useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'

function App() {
    
    return (
    <>
        <Navbar />
        <div className="dashboard-container">
            <div className="notifications"><BiBell /></div>
            <div className="dashboard-content">
                hi
            </div>
        </div>
    </>
  )
}

export default App
