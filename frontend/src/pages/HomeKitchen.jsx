import React from 'react';
import Cards from '../components/Cards';
import { useEffect } from 'react';
import axios from '../axios'; // Adjust the path to match your axios instance

const HomeKitchen = () => {
  const [homeKitchenProducts, setProducts] = React.useState([]);
  useEffect(() => {
    const fetchHomeKitchenProducts = async () => {
      const { data } = await axios.get("/api/product?category=home-kitchen", {
      metadata: { showLoading: true }, // ✅ Only DB routes trigger loader
    });
      setProducts(data);
    };
    fetchHomeKitchenProducts();
  }, []);
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
