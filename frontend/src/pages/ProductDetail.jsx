import React from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../data/allProducts';
import { motion } from 'framer-motion';
import { useCart } from "../context/CartContext";
import AddToCartButton from '../components/AddToCartButton';
const ProductDetail = () => {
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = React.useState(false);


  // Normalize ID for matching
  const products = allProducts.map(product => ({
    ...product,
    id: product._id?.$oid || '',
  }));

  const product = products.find(p => p.id === id);

  if (!product) return <div className="p-6 text-center">Product not found</div>;
  const { name, image, price, review, rating, description } = product;

    

  return (
    <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-[500px] flex flex-col justify-between border-gray-200  rounded-lg shadow-md p-4 hover:border-b4 transition duration-300  "
        >
   
     
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />

      <div className='text-black'>
        <div className="flex-1 mt-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-900 line-clamp-3">{description}</p>
      </div>

      <div className="mt-2">
        <p className="font-bold text-green-600">₹{price}</p>
        <div className="text-yellow-500">
          {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
          <span className="text-yellow-600 text-sm ml-2">({review})</span>
        </div>
        <div className='w-1/2 lg:w-1/4 md:w-1/3  mt-4'>
          {/* <button onClick={submitHandler} className={` bg-[#6d28d9] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 }`}>Add to Cart</button> */}
          <AddToCartButton product={product} />
        </div>
      </div>
      </div>

      </motion.div>
    // <div className="max-w-full mx-auto p-6 bg-white shadow-md rounded-xl">
    //   <img src={product.image} alt={product.name} className="rounded-lg w-full h-64 object-cover mb-4" />
    //   <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
    //   <p className="text-gray-700 mb-2">Price: ₹{product.price}</p>
    //   <p className="text-gray-600 mb-2">Rating: ⭐ {product.rating}</p>
    //   <p className="text-gray-700">{product.description}</p>
    // </div>

  );
};

export default ProductDetail;
