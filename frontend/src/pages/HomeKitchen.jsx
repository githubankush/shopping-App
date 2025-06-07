import React from 'react';
import Cards from '../components/Cards';
import homeKitchenProducts from '../data/homeKitchenProducts.js'; // Update path as needed

const HomeKitchen = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-start p-4'>
      {homeKitchenProducts.map((product, index) => (
        <div key={index} className='w-full sm:w-[48%] md:w-[30%] lg:w-[23%]'>
          <Cards product={product} />
        </div>
      ))}
    </div>
  );
};

export default HomeKitchen;
