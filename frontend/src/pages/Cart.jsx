import React, { useEffect, useState } from "react";
import axios from "../axios";
import toast from "react-hot-toast";

const Cart = () => {

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      const res = await axios.get("/api/cart", { withCredentials: true });
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
        { productId },
        { withCredentials: true }
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
        { amount: total },
        { withCredentials: true }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: razorpayOrder.amount,
        currency: "INR",
        name: "Shoppy",
        description: "Order Payment",
        order_id: razorpayOrder.id,
        handler: async function (response) {
          toast.success("Payment Successful!");
          await axios.post("/api/checkout", {}, { withCredentials: true });
          toast.success("Order placed!");
          fetchCart(); // refresh cart
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
      rzp.open();
    } catch (err) {
      console.error(err);
      toast.error("Checkout failed");
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
        <p className="text-center text-gray-700">Your cart is empty.</p>
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
