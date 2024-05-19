import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Product from './Pages/Product'
// import Photo from './Pages/Photo'


const App = () => {
  return (
    <div className="App">
     
      <BrowserRouter>

     
      {/* <Navbar/> */}
<Routes>

<Route path='/' element={ <Home/>}/>
<Route path='/product' element ={<Product/>}>
 <Route path=':photoId' element={<Product/>}/>
</Route>

</Routes>




      </BrowserRouter>
    
    </div>
  )
}

export default App