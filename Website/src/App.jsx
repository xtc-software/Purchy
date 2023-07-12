import './App.css'
import { Navbar } from "./components/Navbar"

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
            <title>Home | Purchy</title>
        </head>
        <Navbar />
    </>
  )
}

export default App
