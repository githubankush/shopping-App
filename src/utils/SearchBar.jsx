import React, { useState, useRef, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import allProducts from '../data/allProducts';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [item, setItem] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const products = allProducts.map(product => ({
    ...product,
    id: product._id?.$oid || '',
  }));

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(item.toLowerCase()) || product.description.toLowerCase().includes(item.toLowerCase())
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      navigate(`/product/${filteredProducts[0].id}`);
      setShowSuggestions(false);
    }
  };

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md mx-auto p-4 z-50">
      <form onSubmit={submitHandler} className="relative">
        <input
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
            setShowSuggestions(true);
          }}
          className="w-full border border-gray-300 shadow-lg rounded-xl px-4 py-2 text-white focus:outline-none"
          type="text"
          placeholder="Search for a product"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 text-white hover:text-black"
        >
          <BiSearchAlt2 className="text-2xl" />
        </button>
      </form>

      {item && showSuggestions && (
        <div className="absolute w-full bg-white text-black shadow-xl rounded-xl max-h-60 overflow-y-auto mt-2">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="block px-4 py-3 border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => setShowSuggestions(false)}
              >
                {product.name}
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
