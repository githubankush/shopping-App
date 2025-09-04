import React, { useEffect, useState } from "react";
import axios from "../axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaTrash, FaPlus, FaMinus, FaRupeeSign } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const fetchCart = async () => {
    try {
      const res = await axios.get("/api/cart", { withCredentials: true , 
      metadata: { showLoading: true }, // ✅ Only DB routes trigger loader
    });
      setCart(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
      toast.error("Failed to load cart");
    }
    
  };
  

  useEffect(() => {
    
    fetchCart();
  }, []);

  const updateQuantity = async (productId, type) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/cart/update-quantity",
        { productId, type },
        { withCredentials: true }
      );
      setCart(res.data);
      toast.success(`${type === "inc" ? "Increased" : "Decreased"} quantity`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update quantity");
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "/api/cart/remove",
        { productId ,
        withCredentials: true , 
      metadata: { showLoading: true }, // ✅ Only DB routes trigger loader
    }
      );
      setCart(res.data);
      toast.success("Item removed from cart");
      await fetchCart(); // Refresh cart after removal
    } catch (err) {
      console.error("Remove error:", err);
      toast.error("Failed to remove item");
    } finally {
      setLoading(false);
    }
  };

  const total = cart?.items?.reduce(
    (sum, item) => sum + (item.productId?.price || 0) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const { data: razorpayOrder } = await axios.post(
        "/api/payment/create-order",
        { amount: total ,
         withCredentials: true , 
      metadata: { showLoading: true }, // ✅ Only DB routes trigger loader
    }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: razorpayOrder.amount,
        currency: "INR",
        name: "Shoppy",
        description: "Order Payment",
        order_id: razorpayOrder.id,
       handler: async function (response) {
        // console.log("💸 Razorpay payment successful:", response);
          try {
            const checkoutRes = await axios.post(
              "/api/checkout",
              {
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
              },
              { withCredentials: true,
                 metadata: { showLoading: true },
              }
            );

            // console.log("✅ Checkout response:", checkoutRes.data);
            toast.success("Order placed!");
            fetchCart();

          } catch (error) {
            console.error("❌ Checkout API failed:", error.response?.data || error.message);
            toast.error("Order placement failed.");
          }
           
      },
        prefill: {
          name: "Customer",
          email: "test@example.com",
        },
        theme: {
          color: "#6d28d9",
        },
      };
     

      
      const rzp = new window.Razorpay(options);
      
      rzp.on("payment.failed", function (response) {
      console.error("💥 Payment Failed", response.error);
      toast.error("Payment failed. Please try again.");});

      rzp.open();
    } catch (error) {
  console.error("❌ CHECKOUT FAILED:", error.response?.data || error.message);
  toast.error("Order placement failed.");
}

  };

  if (!cart || !cart.items) {
    return <p className="text-center text-gray-700 p-6">Your cart is empty.</p>;
  }

 return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black p-6 text-white">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg">
        🛒 Your Cart
      </h2>

      {cart.items.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center space-y-8 backdrop-blur-lg bg-white/10 border border-purple-400/30 rounded-2xl shadow-2xl max-w-3xl mx-auto">
          <FaShoppingBag className="text-5xl text-pink-400 animate-bounce" />
          <h2 className="text-2xl font-semibold text-gray-200">Your cart is empty</h2>

          <div className="space-y-6">
            <div>
              <p className="text-gray-300 mb-1">Want to check your past orders?</p>
              <Link
                to="/profile"
                className="text-cyan-400 hover:underline font-medium"
              >
                View Orders
              </Link>
            </div>

            <div>
              <Link
                to="/product"
                className="inline-block bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:scale-105 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 shadow-lg"
              >
                🛍️ Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8 max-w-5xl mx-auto">
          {cart.items.map((item) => {
            const product = item.productId;
            if (!product || !product._id) return null;

            return (
              <div
                key={item._id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-pink-500/30 transition"
              >
                {/* Product Details */}
                <div className="flex items-center gap-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-lg border border-white/20"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <p className="text-gray-300">
                      <FaRupeeSign className="inline text-sm" /> {product.price} × {item.quantity}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{product.description}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-end gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(product._id, "dec")}
                      disabled={loading || item.quantity <= 1}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition disabled:opacity-40"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-lg font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product._id, "inc")}
                      disabled={loading}
                      className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition disabled:opacity-40"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <p className="text-green-400 font-bold text-lg flex items-center gap-1">
                    <FaRupeeSign /> {product.price * item.quantity}
                  </p>

                  <button
                    onClick={() => handleRemove(product._id)}
                    disabled={loading}
                    className="flex items-center gap-2 text-sm bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white shadow-lg transition disabled:opacity-50"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cart.items.length > 0 && (
        <div className="max-w-5xl mx-auto mt-12 text-right backdrop-blur-lg bg-white/10 border border-indigo-400/30 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-pink-300 mb-6 flex items-center justify-end gap-2">
            <FaRupeeSign /> {total}
          </h3>
          <button
            onClick={handleCheckout}
            className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 hover:scale-105 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition duration-200"
          >
            Proceed to Checkout 🚀
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
