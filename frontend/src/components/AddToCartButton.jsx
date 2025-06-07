// components/AddToCartButton.jsx
import axios from '../axios';
import { useAuth } from '../context/AuthContext';

const AddToCartButton = ({ productId }) => {
  const { authUser } = useAuth();

  const handleAdd = async () => {
    if (!authUser) return alert("Please login to add items");

    try {
      await axios.post('/api/cart/add', { productId, quantity: 1 }, { withCredentials: true });
      alert("Added to cart!");
    } catch (err) {
      alert("Error adding to cart");
    }
  };

  return (
    <button onClick={handleAdd} className="bg-purple-600 text-white px-4 py-2 rounded">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
