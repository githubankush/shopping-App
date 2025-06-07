import React from 'react';
import Cards from '../components/Cards';
import fashionProducts from '../data/fashionProducts.js';


const FashionProduct = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-start p-4'>
      {fashionProducts.map((product, index) => (
        <div key={index} className='w-full sm:w-[48%] md:w-[30%] lg:w-[23%] '>
          <Cards product={product} />
        </div>
      ))}
    </div>
  );
};

export default FashionProduct;
