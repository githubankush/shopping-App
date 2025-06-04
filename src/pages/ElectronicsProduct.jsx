import React from 'react';
import Cards from '../components/Cards';
import electronicsProducts from '../data/electronicsProducts'; // Adjust the path to match your file location

const ElectronicsProduct = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-start p-4 '>
      {electronicsProducts.map((product, index) => (
        <div key={index} className='w-full sm:w-[48%] md:w-[30%] lg:w-[23%]'>
          <Cards product={product} />
        </div>
      ))}
    </div>
  );
};

export default ElectronicsProduct;
