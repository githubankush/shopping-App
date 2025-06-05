import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import allProducts from '../data/allProducts';
import { FILTERS } from '../components/filters/FilterConfig';
import DynamicFilter from '../components/filters/DynamicFilter';

const Product = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Shuffle products on first load
    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
    setFilteredProducts(shuffled);
  }, []);

  // const applyFilters = (filters) => {
  //   const result = shuffledProducts.filter((product) => {
  //     const matchCategory =
  //       !filters.category || filters.category.includes(product.category);

  //     const matchBrand =
  //       !filters.brand || filters.brand.includes(product.brand);

  //     const matchRating =
  //       !filters.rating ||
  //       product.rating >= parseInt(filters.rating.charAt(0));

  //     const matchPrice =
  //       !filters.price || product.price <= filters.price;

  //     const matchReview =
  //       !filters.review ||
  //       filters.review.every((r) => {
  //         if (r === "Verified") return product.verifiedReview;
  //         if (r === "With Images") return product.reviewImages?.length > 0;
  //         return true;
  //       });

  //     const matchAvailability =
  //       !filters.availability ||
  //       filters.availability.includes(
  //         product.availability ? "In Stock" : "Out of Stock"
  //       );

  //     return (
  //       matchCategory &&
  //       matchBrand &&
  //       matchRating &&
  //       matchPrice &&
  //       matchReview &&
  //       matchAvailability
  //     );
  //   });

  //   setFilteredProducts(result);
  //   setVisibleCount(12); // reset count when filter changes
  // };

  const showMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="min-h-screen p-4 rounded-lg flex flex-col md:flex-row gap-4">
    
      {/* Product Cards Section */}
      <div className="flex-1">
        <div className="flex flex-wrap gap-6 justify-start p-4">
          {filteredProducts.slice(0, visibleCount).map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]"
            >
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

        {/* Sidebar Filter */}
      {/* <div className="w-full md:w-64 abosulute md:sticky top-0 ">

        <DynamicFilter filtersConfig={FILTERS} onApply={applyFilters} />
      </div> */}

    </div>
  );
};

export default Product;
