import React, { useEffect, useState } from "react";
import axios from "../axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  

  useEffect(() => {
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
        console.log("💸 Razorpay payment successful:", response);
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

            console.log("✅ Checkout response:", checkoutRes.data);
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
    <div className="p-4 max-w-5xl mx-auto">
      

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">
        Your Cart
      </h2>

      {cart.items.length === 0 ? (
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your cart is empty 🛒</h2>

        <div className="space-y-4">
          <div>
            <p className="text-gray-700 mb-1">Want to check your past orders?</p>
            <Link
              to="/profile"
              className="text-blue-600 hover:underline font-medium"
            >
              View Orders
            </Link>
          </div>

          <div>
            <Link
              to="/product"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200"
            >
              🛍️ Continue Shopping
            </Link>
          </div>
        </div>
      </div>
        ) : (
        <div className="space-y-6">
          {cart.items.map((item) => {
            const product = item.productId;
            if (!product || !product._id) return null;

            return (
              <div
                key={item._id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 border border-gray-300 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      ₹{product.price} x {item.quantity}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product._id, "dec")}
                      disabled={loading || item.quantity <= 1}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product._id, "inc")}
                      disabled={loading}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-green-600 font-bold">
                    ₹{product.price * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemove(product._id)}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md"
                    disabled={loading}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cart.items.length > 0 && (
        <div className="mt-8 text-right">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
            Total: ₹{total}
          </h3>
          <button
            onClick={handleCheckout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
