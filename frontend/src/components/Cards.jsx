import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from "../context/CartContext";
import axios from '../axios'; 
import AddToCartButton from './AddToCartButton';
const Cards = ({ product }) => {
  const { name, image, price, review, rating, description } = product;
  
  const { addToCart } = useCart();
  
  const submitHandler = async () => {
  try {
    await axios.post('/api/cart/add', {
      productId: product._id,
      quantity: 1
    }, { withCredentials: true });

    alert(`${product.name} added to cart!`);
  } catch (err) {
    console.error(err);
    alert("Error adding to cart");
  }
};

  return (
     <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-[500px] flex flex-col justify-between border-gray-200 border-1 rounded-lg shadow-md p-4 hover:border-b4 transition duration-300 text-white "
        >
   
     
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />

      <div>
        <div className="flex-1 mt-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
      </div>

      <div className="mt-2">
        <p className="font-bold text-green-600">₹{price}</p>
        <div className="text-yellow-500">
          {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
          <span className="text-yellow-600 text-sm ml-2">({review})</span>
        </div>
        <div className='flex justify-start items-center mt-4'>
          {/* <button onClick={submitHandler} className=' bg-[#6d28d9] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 w-full'>Add to Cart</button> */}
          <AddToCartButton productId={product._id} />
        </div>
      </div>
      </div>

      </motion.div>
  );
};

export default Cards;
