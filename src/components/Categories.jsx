import React from 'react'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
    <div>
        <div className='categories-nav'>
            <ul className=' h-[42vw] flex flex-col gap-4 p-4 bg-gray-100'>
                <li className='text-blue-600'>All Categories</li>
                <Link to={'/product/electronics'}>Electronics</Link>
                <Link to={'/product/fashion'}>Fashion</Link>
                <Link to={'/product/homekitchen'}>Home & Kitchen</Link>
                <Link to={'/product/sports'}>Sports & Outdoors</Link>
            </ul>
        </div>
    </div>
  )
}

export default Categories