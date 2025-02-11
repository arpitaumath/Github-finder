import React from 'react'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='w-full bg-cyan-600 py-2 '> 
          <span className='flex items-center '>
          <FaGithub  className='mx-3 text-2xl  text-white'/>
            <h1 className='text-2xl font-bold text-white'>Github Finder</h1>
          </span>
          
          </nav>
  )
}

export default Navbar
