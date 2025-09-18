import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('dashboard');

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - First Column */}
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      
      {/* Main Content - Second Column */}
      <div className="flex-1 bg-slate-800 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
