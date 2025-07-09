import { Routes, Route } from "react-router-dom";
import AdminRoute from "./components/AdminRoute";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageOrders from "./pages/admin/ManageOrders";
import ManageUsers from "./pages/admin/ManageUsers";
import Sidebar from "./pages/admin/Sidebar";

const AdminRoutes = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sticky sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <Routes>
          <Route path="products" element={<AdminRoute><ManageProducts /></AdminRoute>} />
          <Route path="orders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
          <Route path="users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
