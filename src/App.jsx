import { useState } from 'react'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <NavBar />
    
      </Router>
    </>
  )
}

export default App
