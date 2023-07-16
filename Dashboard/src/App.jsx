import { BiBell } from "react-icons/bi"
import { useState } from 'react'
import Navbar from "./components/Navbar"
import './App.css'
import Home from "./pages/Home"
import Notifications from "./components/NotificationMenu"

function App() {
    
    return (
    <>
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Dashboard | Purchy</title>
        </head>
        <body>
            <Navbar />
            <div className="dashboard-content">
                <Home />
            </div>
        </body>
    </>
  )
}

export default App
