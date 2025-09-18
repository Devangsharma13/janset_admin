import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, NavLink } from 'react-router-dom';
import { 
  FiHome, 
  FiFileText, 
  FiBarChart, 
  FiUsers, 
  FiSettings,
  FiSearch,
  FiBell,
  FiChevronDown,
  FiUser,
  FiLogOut,
  FiMap
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user data on component mount
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserDropdown && !event.target.closest('.user-dropdown')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    
    // Navigate to login page
    navigate('/admin/login');
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiHome, path: '/admin/dashboard' },
    { id: 'live-map', label: 'Live Map', icon: FiMap, path: '/admin/live-map' },
    { id: 'reports', label: 'All Reports', icon: FiFileText, path: '/admin/all-reports' },
    { id: 'analytics', label: 'Analytics', icon: FiBarChart, path: '/admin/analytics' },
    { id: 'users', label: 'User Management', icon: FiUsers, path: '/admin/users' },
    { id: 'settings', label: 'Settings', icon: FiSettings, path: '/admin/settings' },
  ];

  // NavLink classes function for active/inactive states
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? 'w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 bg-emerald-500 text-white'
      : 'w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 text-slate-300 hover:bg-slate-700';

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar - Left Column */}
      <div className="w-64 bg-slate-800 flex flex-col">
        {/* Logo and Brand */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <svg 
                className="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">JanSetu</h1>
              <p className="text-slate-400 text-xs">Admin Portal</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={navLinkClasses}
                  >
                    <Icon className="mr-3" size={20} />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.name?.charAt(0) || 'A'}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-slate-300 text-sm font-medium">
                {user?.name || 'Admin User'}
              </p>
              <p className="text-slate-500 text-xs">
                {user?.role || 'Administrator'}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="p-1 text-slate-400 hover:text-red-400 transition-colors duration-200"
              title="Logout"
            >
              <FiLogOut size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area - Right Column */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Title */}
            <div>
              <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
              <p className="text-slate-400 text-sm">Welcome back, Admin! Here's what's happening today.</p>
            </div>

            {/* Right side - Search, Notifications, User Profile */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <FiBell size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile Dropdown */}
              <div className="relative user-dropdown">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center space-x-2 p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {user?.name?.charAt(0) || 'A'}
                    </span>
                  </div>
                  <span className="text-sm font-medium">
                    Welcome, {user?.name?.split(' ')[0] || 'Admin'}
                  </span>
                  <FiChevronDown size={16} />
                </button>

                {/* Dropdown Menu */}
                {showUserDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-10">
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-slate-700">
                        <p className="text-sm font-medium text-white">{user?.name || 'Admin User'}</p>
                        <p className="text-xs text-slate-400">{user?.role || 'Administrator'}</p>
                      </div>
                      <a href="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                        Profile Settings
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                        Account Preferences
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white">
                        Help & Support
                      </a>
                      <hr className="my-2 border-slate-700" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
