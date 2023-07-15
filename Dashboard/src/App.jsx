import { BiBell } from "react-icons/bi"
import { useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'

function App() {
    
    return (
    <>
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Dashboard | Purchy</title>
        </head>
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
