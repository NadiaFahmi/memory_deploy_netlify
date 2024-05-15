import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     
        <Route path='/' element={ <Home/>}/>
      
       
      </Routes>
      
    
    </div>
  )
}

export default App