import React from 'react';
import Cards from '../components/Cards';
import { useEffect } from 'react';
import axios from '../axios'; // Adjust the path to match your axios instance


const FashionProduct = () => {

  const [fashionProducts, setFashionProducts] = React.useState([]);
  useEffect(()=>{
    const fetchFashionProducts = async () => {
      try {
        const { data } = await axios.get("/api/product?category=fashion");
        setFashionProducts(data);
      } catch (err) {
        console.error("Error loading fashion products:", err);
      }
    };
    fetchFashionProducts();
  },[]);

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
