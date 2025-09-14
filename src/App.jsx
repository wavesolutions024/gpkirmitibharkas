import React from 'react'


import './App.scss'
import { BrowserRouter, Routes } from 'react-router-dom'
import Top_header from './comp/top_header/Top_header'

function App() {


  return (
    <div className='app'>
     <BrowserRouter>
     <Top_header/>
     <Routes>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
