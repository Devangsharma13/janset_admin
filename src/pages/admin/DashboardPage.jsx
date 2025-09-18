import React from 'react';
import { 
  FiFileText, 
  FiClock, 
  FiTrendingUp, 
  FiAlertTriangle,
  FiMap,
  FiActivity
} from 'react-icons/fi';

const DashboardPage = () => {
  const kpiCards = [
    {
      icon: FiFileText,
      title: 'New Reports Today',
      value: '24',
      description: 'Reports submitted today',
      color: 'text-green-400'
    },
    {
      icon: FiClock,
      title: 'Pending Resolution',
      value: '112',
      description: 'Awaiting action',
      color: 'text-blue-400'
    },
    {
      icon: FiTrendingUp,
      title: 'Average Resolution Time',
      value: '3.2 Days',
      description: 'Time to resolve',
      color: 'text-purple-400'
    },
    {
      icon: FiAlertTriangle,
      title: 'Overdue Reports',
      value: '8',
      description: 'Past due date',
      color: 'text-red-400'
    }
  ];

  const recentActivities = [
    { id: 1, text: 'Report #1024 assigned to Public Works', time: '2 minutes ago' },
    { id: 2, text: 'Report #1023 resolved by Street Maintenance', time: '15 minutes ago' },
    { id: 3, text: 'New report #1025 submitted in Downtown', time: '1 hour ago' },
    { id: 4, text: 'Report #1022 escalated to City Manager', time: '2 hours ago' },
    { id: 5, text: 'Report #1021 closed by Traffic Department', time: '3 hours ago' },
    { id: 6, text: 'Report #1020 assigned to Parks & Recreation', time: '4 hours ago' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-300 text-lg">
          Welcome back, Admin! Here is the city's current status.
        </p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpiCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-green-900/50 border border-green-700 rounded-lg p-6 hover:bg-green-900/60 transition-colors duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`text-2xl ${card.color}`} />
                <div className="text-right">
                  <h3 className="text-slate-300 text-sm font-medium mb-1">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-xs">
                    {card.description}
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">
                {card.title === 'Overdue Reports' ? (
                  <span className="text-red-400">{card.value}</span>
                ) : (
                  card.value
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Issue Map - Left Column (2 cols) */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 h-96">
            <div className="flex items-center mb-4">
              <FiMap className="text-teal-400 text-xl mr-3" />
              <h2 className="text-xl font-semibold text-white">Live Issue Map</h2>
            </div>
            <div className="bg-slate-800 border border-slate-600 rounded-lg h-full flex items-center justify-center">
              <div className="text-center text-slate-400">
                <FiMap className="text-4xl mx-auto mb-2" />
                <p className="text-lg">Interactive Map View</p>
                <p className="text-sm">Real-time issue locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity - Right Column (1 col) */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 h-96">
            <div className="flex items-center mb-4">
              <FiActivity className="text-teal-400 text-xl mr-3" />
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
            </div>
            <div className="space-y-3 overflow-y-auto h-80">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-slate-800 border border-slate-600 rounded-lg p-3 hover:bg-slate-700 transition-colors duration-200"
                >
                  <p className="text-slate-300 text-sm mb-1">
                    {activity.text}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {activity.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
