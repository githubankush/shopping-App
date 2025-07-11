import React from 'react';
import Cards from '../components/Cards'; // ✅ required import
import axios from '../axios';
import { useEffect } from 'react'; // ✅ useEffect to fetch data
const Sports = () => {
  const [sportsProducts, setProducts] = React.useState([]); // ✅ useState to manage products
  useEffect(() => {
  const fetchSportsProducts = async () => {
    const { data } = await axios.get("/api/product?category=sports");
    setProducts(data);
  };
  fetchSportsProducts();
}, []);
  return (
    <div className='flex flex-wrap gap-6 justify-start p-4'>
      {sportsProducts.map((product, index) => (
        <div key={index} className='w-full sm:w-[48%] md:w-[30%] lg:w-[23%]'>
          <Cards product={product} />
        </div>
      ))}
    </div>
  );
};

export default Sports;
