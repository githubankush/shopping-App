import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <Link to={'/logout'} className='btn btn-primary p-2 rounded-lg btn-sm mt-5 bg-red-500 font-bold text-white'>Logout</Link>
  )
}

export default Logout