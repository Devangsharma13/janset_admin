import React from 'react';
import { 
  FiGrid, 
  FiMap, 
  FiFileText, 
  FiUsers, 
  FiSettings, 
  FiLogOut 
} from 'react-icons/fi';

const Sidebar = ({ activePage, onPageChange }) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiGrid },
    { id: 'live-map', label: 'Live Map', icon: FiMap },
    { id: 'all-reports', label: 'All Reports', icon: FiFileText },
    { id: 'users', label: 'Users', icon: FiUsers },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="w-64 bg-slate-900 h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-teal-400">CivicResolve</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    isActive
                      ? 'border-l-4 border-teal-500 bg-slate-800 text-teal-400'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon className="mr-3 text-teal-400" size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User/Logout Section */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <div>
              <p className="text-slate-300 text-sm font-medium">Admin User</p>
              <p className="text-slate-500 text-xs">Administrator</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors duration-200"
        >
          <FiLogOut className="mr-3 text-teal-400" size={18} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
