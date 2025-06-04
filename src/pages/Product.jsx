import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import allProducts from '../data/allProducts';

const Product = () => {
  const [visibleCount, setVisibleCount] = useState(12); // Show first 12
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    // Shuffle products on first load
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen p-4 rounded-lg"> 
      
      {/* Displaying the products */}  
      <div className="flex flex-wrap gap-6 justify-start p-4">
        {shuffledProducts.slice(0, visibleCount).map((product, index) => (
          <div key={index} className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
            <Cards product={product} />
          </div>
        ))}
      </div>

      {visibleCount < shuffledProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={showMore}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
