import React from 'react'
import './App.css'
import Sliceuser from './components/Sliceuser'
import Inputdata from './components/Inputdata'
import {Routes,Route} from 'react-router-dom'
import Header from './Header/Header'
import Registration from './components/Registration'



const App = () => {
  return (
    <div>
  
   
<Header/>
      <Routes>
        <Route path='/' element={<Inputdata/>} />
        <Route path='/data' element={<Sliceuser/>} />
        <Route path='/registration' element={<Registration/>} />
      </Routes>
      
     
  
     
    </div>
  )
}

export default App
