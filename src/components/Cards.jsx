import React from 'react';

const Cards = ({ product }) => {
  const { name, image, price, review, rating, description } = product;

  const submitHandler = () => {
    // Handle the add to cart functionality here
    console.log(`${name} added to cart!`);
    alert(`${name} added to cart!`);
  }

  return (
    <div className="h-[400px] flex flex-col justify-between border-gray-200 border-1 rounded-lg shadow-md p-4 hover:border-b4 transition duration-300 text-white">
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
        <div className='flex justify-between items-center mt-4'>
          <button className=' bg-[#4d28c9] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2'>View</button>
          <button onClick={submitHandler} className=' bg-[#6d28d9] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4'>Add to Cart</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
