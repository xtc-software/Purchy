import './App.css'
import { Navbar } from "./components/Navbar"
import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import Authentication from "./pages/auth"

function App() {
    return (
        <>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://purchy.io/" />
                <meta property="og:title" content="Home | Purchy" />
                <meta property="og:description" content="How did you find me?" />
                <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/en/b/bb/Emoji_hammer.png" />
            </head>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/auth/discord" element={<Authentication />} />
            </Routes>
        </>
  )
}

export default App
