import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Categories from "./components/Categories";
import ElectronicsProduct from "./pages/ElectronicsProduct";
import FashionProduct from "./pages/FashionProduct";
import Sports from "./pages/Sports";
import HomeKitchen from "./pages/HomeKitchen";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

const App = () => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");

  return (
    <CartProvider>
      <div className=" bg-[#6d28d9] min-h-screen">
        <Navbar />
        <div className="w-full h-[calc(100vh-8rem)] flex items-start justify-between overflow-hidden bg-black">
          {isProductPage && <Categories />}
          <div className="w-full h-full overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/product/electronics" element={<ElectronicsProduct />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/product/fashion" element={<FashionProduct />} />
              <Route path="/product/sports" element={<Sports />} />
              <Route path="/product/homekitchen" element={<HomeKitchen />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
