import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import axios from '../axios' // ← use your axios instance

const Product = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/product");
        console.log("Fetched products:", data); // Debugging line to check fetched data
        const shuffled = [...data].sort(() => Math.random() - 0.5); // optional
        setFilteredProducts(shuffled);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen p-4 rounded-lg flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <div className="flex flex-wrap gap-6 justify-start p-4">
          {filteredProducts.slice(0, visibleCount).map((product, index) => (
            <div key={product._id || index} className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]">
              <Cards product={product} />
            </div>
          ))}
        </div>

        {visibleCount < filteredProducts.length && (
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
    </div>
  );
};

export default Product;
