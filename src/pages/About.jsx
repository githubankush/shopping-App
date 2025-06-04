import React from 'react';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-[#6d28d9] to-[#9333ea] text-white flex items-center justify-center px-4 py-16 overflow-hidden"> 
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold mb-6">
          About <span className="text-green-600">SHOPPY</span>
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-green-200">SHOPPY</span> – your one-stop online destination for all your shopping needs. We are a modern, easy-to-use e-commerce platform where users can
          <span className="text-yellow-100 font-medium"> register, explore, and buy</span> products from a wide range of categories like Electronics, Fashion, Home & Kitchen, and Sports & Outdoors.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Whether you're upgrading your gadgets, refreshing your wardrobe, or enhancing your home, SHOPPY ensures a
          <span className="text-yellow-100 font-medium"> smooth, secure, and delightful</span> shopping experience.
        </p>
        <p className="text-lg leading-relaxed">
          Join us today and experience the future of online shopping with
          <span className="text-yellow-200 font-semibold"> fast delivery</span>, 
          <span className="text-yellow-200 font-semibold"> verified reviews</span>, and
          <span className="text-yellow-200 font-semibold"> unbeatable deals</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
