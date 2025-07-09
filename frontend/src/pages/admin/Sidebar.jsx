import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-indigo-800 text-white p-6 min-h-screen flex flex-col pt-28">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link
          to="/admin/products"
          className="hover:bg-indigo-700 px-4 py-2 rounded transition duration-200"
        >
          Products
        </Link>
        <Link
          to="/admin/orders"
          className="hover:bg-indigo-700 px-4 py-2 rounded transition duration-200"
        >
          Orders
        </Link>
        <Link
          to="/admin/users"
          className="hover:bg-indigo-700 px-4 py-2 rounded transition duration-200"
        >
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
