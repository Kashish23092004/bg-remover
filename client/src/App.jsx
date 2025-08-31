import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Buycredit from './Pages/Buycredit'
import Result from './Pages/Result'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/result' element={<Result/>}/>
       <Route path='/buycredit' element={<Buycredit/>}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App