import Sidebar from "./Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="p-6 w-full">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/admin/products" className="bg-white p-4 shadow rounded">Manage Products</a>
          <a href="/admin/orders" className="bg-white p-4 shadow rounded">Manage Orders</a>
          <a href="/admin/users" className="bg-white p-4 shadow rounded">Manage Users</a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
