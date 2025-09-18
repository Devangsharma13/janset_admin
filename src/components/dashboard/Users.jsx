import React, { useState } from 'react';
import { 
  FiSearch, 
  FiPlus, 
  FiEdit, 
  FiTrash2, 
  FiUser, 
  FiMail, 
  FiPhone,
  FiShield,
  FiMoreVertical
} from 'react-icons/fi';

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock user data
  const users = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@jansetu.gov.in',
      phone: '+91 98765 43210',
      role: 'Administrator',
      department: 'Public Works',
      status: 'active',
      lastLogin: '2024-01-16 10:30 AM'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@jansetu.gov.in',
      phone: '+91 98765 43211',
      role: 'Manager',
      department: 'Water Supply',
      status: 'active',
      lastLogin: '2024-01-16 09:15 AM'
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit.singh@jansetu.gov.in',
      phone: '+91 98765 43212',
      role: 'Operator',
      department: 'Street Lighting',
      status: 'inactive',
      lastLogin: '2024-01-14 02:45 PM'
    },
    {
      id: 4,
      name: 'Sneha Patel',
      email: 'sneha.patel@jansetu.gov.in',
      phone: '+91 98765 43213',
      role: 'Supervisor',
      department: 'Sanitation',
      status: 'active',
      lastLogin: '2024-01-16 11:20 AM'
    },
    {
      id: 5,
      name: 'Vikram Gupta',
      email: 'vikram.gupta@jansetu.gov.in',
      phone: '+91 98765 43214',
      role: 'Operator',
      department: 'Traffic Management',
      status: 'active',
      lastLogin: '2024-01-16 08:45 AM'
    }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleColor = (role) => {
    switch (role) {
      case 'Administrator': return 'bg-red-500';
      case 'Manager': return 'bg-blue-500';
      case 'Supervisor': return 'bg-green-500';
      case 'Operator': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-500' : 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">User Management</h1>
          <p className="text-slate-400">Manage system users and their permissions</p>
        </div>
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <FiPlus size={16} />
          <span>Add User</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <button className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white hover:bg-slate-600 flex items-center space-x-2">
            <FiShield size={16} />
            <span>Roles & Permissions</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-semibold">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{user.name}</div>
                        <div className="text-sm text-slate-400">ID: {user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-300 flex items-center mb-1">
                      <FiMail className="mr-2" size={14} />
                      {user.email}
                    </div>
                    <div className="text-sm text-slate-400 flex items-center">
                      <FiPhone className="mr-2" size={14} />
                      {user.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {user.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getStatusColor(user.status)}`}>
                      {user.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <FiEdit size={16} />
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <FiTrash2 size={16} />
                      </button>
                      <button className="text-slate-400 hover:text-slate-300">
                        <FiMoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
