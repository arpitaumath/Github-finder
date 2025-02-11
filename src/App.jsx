import React from 'react'
import Navbar from './component/Navbar'
import { GithubProviders } from './provider/GithubContext'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'


const App = () => {
  return (
    <BrowserRouter>
    <GithubProviders >
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:login" element ={<Profile/>}/>
       </Routes>
    
    </GithubProviders>
    </BrowserRouter>
  )
}

export default App
