import React from 'react'
import { useEffect } from 'react';
import axios from '../../axios'; // Adjust the path to match your axios instance
import toast from 'react-hot-toast';

const ManageUsers = () => {

  const [users, setUsers] = React.useState([])

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/admin/user/${userId}`, {
      metadata: { showLoading: true },
      });
      // Update the users list after deleting a user
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
      alert("User deleted successfully");
      toast.success("User deleted successfully");
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/admin/users');
        // console.log("Fetched users in ManageUsers:", data);
        setUsers(data);
      } catch (err) {
        console.error("Error loading users:", err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-purple-700">Manage Users</h1>
      <p className="text-gray-600">List of registered users and their details.</p>
      {/* Add user management functionality here */}
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user._id} className="bg-white p-4 mb-2 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <button onClick={handleDeleteUser.bind(null, user._id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Delete User
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ManageUsers