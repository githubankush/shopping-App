import React from 'react';
import Cards from '../components/Cards';
import { useEffect } from 'react';
import axios from '../axios'; // Adjust the path to match your axios instance

// import electronicsProducts from '../data/electronicsProducts'; // Adjust the path to match your file location

const ElectronicsProduct = () => {
  const [electronicsProducts, setelectronicsProducts] = React.useState([]);
  useEffect(() => {
    const fetchElectronics = async () => {
      try {
        const { data } = await axios.get("/api/product?category=electronics");
        setelectronicsProducts(data);
      } catch (err) {
        console.error("Error loading electronics:", err);
      }
    };
    fetchElectronics();
  }, []);
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
