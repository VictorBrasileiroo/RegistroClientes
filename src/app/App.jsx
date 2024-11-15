import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import EditClient from '../pages/EditClient'

export default function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path="/edit/" element={<EditClient/>}/>
            </Routes>
        </Router>
    </>
  )
}
