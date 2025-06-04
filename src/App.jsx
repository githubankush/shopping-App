import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product";
import About from "./pages/about";
import Categories from "./components/Categories";
import ElectronicsProduct from "./pages/ElectronicsProduct";
import FashionProduct from "./pages/FashionProduct";
import Sports from "./pages/Sports";
import HomeKitchen from "./pages/HomeKitchen";
import Register from "./pages/Register";
import Login from "./pages/Login";

const App = () => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");

  return (
    <>
      <Navbar />
      <div className="w-full h-[calc(100vh-6rem)]   flex items-start justify-between overflow-hidden bg-black">
        {isProductPage && <Categories />}
        <div className="w-full h-full  overflow-y-scroll md:p-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/product/electronics"
              element={<ElectronicsProduct />}
            />
            <Route path="/product/:id" element={<FashionProduct />} />
            <Route path="/product/fashion" element={<FashionProduct />} />
            <Route path="/product/sports" element={<Sports />} />
            <Route path="/product/homekitchen" element={<HomeKitchen />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
