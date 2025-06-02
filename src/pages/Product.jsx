import React from 'react'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div>
           <Link to='/product/electronics'>Electronic Items</Link>
        </div>
    </div>
  )
}

export default Product