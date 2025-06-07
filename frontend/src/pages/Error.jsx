import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-8rem)] bg-gradient-to-br from-purple-900 to-indigo-900'>
        <h1 className='flex items-center justify-center h-[calc(100vh-7rem)] text-white text-3xl font-bold'>404 - Page Not Found</h1>
        <p className='flex items-center justify-center text-white text-xl'>The page you are looking for does not exist.</p>
    </div>
  )
}

export default Error