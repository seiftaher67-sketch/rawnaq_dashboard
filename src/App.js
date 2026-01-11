import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";

// pages
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import Dashboard from "./pages/Dashboard";

import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import ResortDetails from "./pages/ResortDetails";

import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import Customers from "./pages/Customers";
import Reports from "./pages/Reports";
import Email from "./pages/Email";

import Profile from "./pages/Profile";
import Security from "./pages/Security";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= Auth Routes ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* ================= Dashboard Routes ================= */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/resort-details" element={<ResortDetails />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<AddProduct />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />

          {/* Customers */}
          <Route path="/customers" element={<Customers />} />

          {/* Reports */}
          <Route path="/reports" element={<Reports />} />

          {/* Settings */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/security" element={<Security />} />
        </Route>

        {/* ================= Fallback ================= */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
