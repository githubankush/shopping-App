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
      <div className="min-h-screen bg-[#6d28d9]">
        {/* Navbar (always on top) */}
        <Navbar />

        {/* Page Content */}
        <div className="flex flex-col md:flex-row w-full bg-violet-100 min-h-[calc(100vh-9rem)]  ">
          {/* Sidebar shown only for product-related routes */}
          {isProductPage && (
            <div className="w-full md:w-64 lg:h-full sticky top-0 md:top-0 z-10">
              <Categories />
            </div>
          )}

          {/* Main Content Area */}
          <div className="flex-1  md:">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route
                path="/product/electronics"
                element={<ElectronicsProduct />}
              />
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
