import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogIn, FiEye, FiEyeOff } from 'react-icons/fi';

const AdminLogin = () => {
  const [operatorId, setOperatorId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Login credentials:', { operatorId, password });
    
    // Simple authentication logic - in real app, this would call an API
    if (operatorId === 'admin' && password === 'admin123') {
      // Store auth state (in real app, this would be a proper auth token)
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ 
        id: 'admin', 
        name: 'Admin User', 
        role: 'Administrator' 
      }));
      
      // Navigate to dashboard
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials. Use admin / admin123');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          {/* Logo Placeholder - Ashoka Chakra inspired */}
          <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4">
            <svg 
              className="w-8 h-8 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">
            JanSetu Admin Portal
          </h1>
          <p className="text-slate-400 text-sm">
            Secure access to administrative functions
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Operator ID Field */}
            <div>
              <label 
                htmlFor="operatorId" 
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Operator ID / Email Address
              </label>
              <input
                id="operatorId"
                name="operatorId"
                type="text"
                required
                value={operatorId}
                onChange={(e) => setOperatorId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your operator ID or email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-300 transition-colors duration-200"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiLogIn className="mr-2" size={18} />
              {isLoading ? 'Signing In...' : 'Login'}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-slate-400 text-xs">
              Demo credentials: admin / admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-slate-500 text-xs">
            © 2024 JanSetu Admin Portal. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
