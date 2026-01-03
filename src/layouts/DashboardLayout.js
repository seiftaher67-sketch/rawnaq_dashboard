import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

const DashboardLayout = () => {
  return (
    <div className="bg-gray-light">
      <Header />
      <Sidebar />
      <main className="mr-64 pt-20 min-h-screen overflow-x-hidden bg-gray-light p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
