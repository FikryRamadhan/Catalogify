import { useState } from 'react'
import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'
import Routers from './Utils/Routers'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        {Routers.map((routers, index) => (
          <Route key={index} path={routers.path} element={routers.element} />
        ))}
        </Routes>
        <Footer />
      </Router> 
    </>
  )
}

export default App
