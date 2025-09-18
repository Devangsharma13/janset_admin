import React, { useState } from 'react';
import { 
  FiTrendingUp, 
  FiTrendingDown, 
  FiBarChart, 
  FiPieChart,
  FiDownload,
  FiRefreshCw,
  FiCalendar
} from 'react-icons/fi';
import { mockIssues } from '../../data/mockIssues';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');

  // Calculate analytics data
  const totalIssues = mockIssues.length;
  const resolvedIssues = mockIssues.filter(issue => issue.status === 'resolved').length;
  const pendingIssues = mockIssues.filter(issue => issue.status === 'pending').length;
  const inProgressIssues = mockIssues.filter(issue => issue.status === 'in_progress').length;

  const resolutionRate = totalIssues > 0 ? ((resolvedIssues / totalIssues) * 100).toFixed(1) : 0;

  // Category breakdown
  const categoryStats = mockIssues.reduce((acc, issue) => {
    acc[issue.category] = (acc[issue.category] || 0) + 1;
    return acc;
  }, {});

  const topCategories = Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  // Priority breakdown
  const priorityStats = mockIssues.reduce((acc, issue) => {
    acc[issue.priority] = (acc[issue.priority] || 0) + 1;
    return acc;
  }, {});

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-slate-400';
    }
  };

  const getCategoryColor = (index) => {
    const colors = ['text-blue-400', 'text-green-400', 'text-yellow-400', 'text-purple-400', 'text-pink-400'];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          <p className="text-slate-400">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <FiRefreshCw size={16} />
            <span>Refresh</span>
          </button>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <FiDownload size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">Total Issues</p>
              <p className="text-3xl font-bold text-white">{totalIssues}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <FiBarChart className="text-white" size={24} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FiTrendingUp className="text-green-400 mr-1" size={16} />
            <span className="text-green-400 text-sm">+12% from last week</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">Resolved</p>
              <p className="text-3xl font-bold text-white">{resolvedIssues}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <FiTrendingUp className="text-white" size={24} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FiTrendingUp className="text-green-400 mr-1" size={16} />
            <span className="text-green-400 text-sm">+8% from last week</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">Resolution Rate</p>
              <p className="text-3xl font-bold text-white">{resolutionRate}%</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <FiPieChart className="text-white" size={24} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FiTrendingUp className="text-green-400 mr-1" size={16} />
            <span className="text-green-400 text-sm">+3% from last week</span>
          </div>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">Pending</p>
              <p className="text-3xl font-bold text-white">{pendingIssues}</p>
            </div>
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
              <FiTrendingDown className="text-white" size={24} />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <FiTrendingDown className="text-red-400 mr-1" size={16} />
            <span className="text-red-400 text-sm">+5% from last week</span>
          </div>
        </div>
      </div>

      {/* Charts and Breakdowns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Issues by Category */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Issues by Category</h3>
            <FiPieChart className="text-slate-400" size={20} />
          </div>
          <div className="space-y-4">
            {topCategories.map(([category, count], index) => (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${getCategoryColor(index).replace('text-', 'bg-')}`}></div>
                  <span className="text-slate-300">{category}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getCategoryColor(index).replace('text-', 'bg-')}`}
                      style={{ width: `${(count / totalIssues) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Issues by Priority */}
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Issues by Priority</h3>
            <FiBarChart className="text-slate-400" size={20} />
          </div>
          <div className="space-y-4">
            {Object.entries(priorityStats).map(([priority, count]) => (
              <div key={priority} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    priority === 'high' ? 'bg-red-500' : 
                    priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                  <span className="text-slate-300 capitalize">{priority} Priority</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        priority === 'high' ? 'bg-red-500' : 
                        priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(count / totalIssues) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium w-8 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-6">Status Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl font-bold">{pendingIssues}</span>
            </div>
            <h4 className="text-white font-medium">Pending</h4>
            <p className="text-slate-400 text-sm">Awaiting action</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl font-bold">{inProgressIssues}</span>
            </div>
            <h4 className="text-white font-medium">In Progress</h4>
            <p className="text-slate-400 text-sm">Currently being worked on</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl font-bold">{resolvedIssues}</span>
            </div>
            <h4 className="text-white font-medium">Resolved</h4>
            <p className="text-slate-400 text-sm">Successfully completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
