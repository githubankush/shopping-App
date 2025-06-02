import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between bg-gray-800 text-white p-4'>
       <div>Rachna</div>
       <div className='flex gap-4'>
        <Link to={'/'}>Home</Link>
        <Link to={'/product'}>Product</Link>
        <Link to={'/about'}>About</Link>
       </div>
    </div>
    
  )
}

export default Navbar