import { useEffect, useState } from "react";
import axios from "../../axios";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // State for managing the edit form
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: ""
  });

  // State for managing the add product modal
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
      name: "",
      price: "",
      stock: "",
      description: "",
      image: "",
      category: "",
    });

    const handleAddFormChange = (e) => {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    };

    const handleAddProduct = async () => {
      try {
        await axios.post("/api/admin/product", newProduct, {
          withCredentials: true,
        });
        setShowAddModal(false);
        setNewProduct({
          name: "",
          price: "",
          stock: "",
          description: "",
          image: "",
          category: "",
        });
        fetchProducts(); // Refresh list
      } catch (err) {
        console.error("Error adding product:", err);
      }
    };



  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/admin/products", {
        withCredentials: true,
        metadata: { showLoading: true }, // ✅ Only DB routes trigger loader
      });
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };
   
  // Function to handle product deletion
  // This function will be called when the delete button is clicked
  const handleDelete = async (productId) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;

    try {
      await axios.delete(`/api/admin/product/${productId}`, {
        withCredentials: true,
      });
      fetchProducts(); // Refresh the list
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  const openEditForm = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
      stock: product.stock,
    });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `/api/admin/product/${editingProduct._id}`,
        formData,
        { withCredentials: true }
      );
      setEditingProduct(null); // Close modal
      fetchProducts(); // Refresh list
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Products</h2>
        <p className="text-gray-600 mb-4">
          Here you can view, edit, and delete products in your store.
        </p>
         <button
            onClick={() => setShowAddModal(true)}
            className="mb-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add New Product
          </button>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    No products found.
                  </td>
                </tr>
              ) : (
                products.map((p) => (
                  <tr key={p._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 text-sm text-gray-800">{p.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">₹{p.price}</td>
                    <td className="px-6 py-4 text-sm text-gray-800">{p.stock}</td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => openEditForm(p)}
                        className="text-blue-600 hover:underline mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Edit Modal */}
        {editingProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Product Name"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleFormChange}
                  placeholder="Price"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  placeholder="category"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  placeholder="description"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleFormChange}
                  placeholder="image URL"
                  className="w-full px-4 py-2 border rounded"
                />
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleFormChange}
                  placeholder="Stock"
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() => setEditingProduct(null)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Product Modal */}
       {showAddModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-xl font-semibold mb-4">Add New Product</h3>
                <div className="space-y-3">
                  <input name="name" placeholder="Name" onChange={handleAddFormChange} className="w-full border px-4 py-2 rounded" />
                  <input name="price" type="number" placeholder="Price" onChange={handleAddFormChange} className="w-full border px-4 py-2 rounded" />
                  <input name="stock" type="number" placeholder="Stock" onChange={handleAddFormChange} className="w-full border px-4 py-2 rounded" />
                  <input name="category" placeholder="Category" onChange={handleAddFormChange} className="w-full border px-4 py-2 rounded" />
                  <input name="image" placeholder="Image URL" onChange={handleAddFormChange} className="w-full border px-4 py-2 rounded" />
                  <textarea name="description" placeholder="Description" onChange={handleAddFormChange} className="w-full border px-4 py-2 rounded" />
                </div>
                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddProduct}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default ManageProducts;
