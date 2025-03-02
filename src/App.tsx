import { useState } from 'react'
import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'
import routes from './Utils/Routes'
import Navbar from './Component/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        </Routes>
      </Router> 
    </>
  )
}

export default App
