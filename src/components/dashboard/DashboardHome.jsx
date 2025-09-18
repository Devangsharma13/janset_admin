import React from 'react';
import { 
  FiPlus,
  FiClock,
  FiAlertTriangle,
  FiCheckCircle
} from 'react-icons/fi';
import KPICard from './KPICard';
import IssueMap from './IssueMap';
import { mockIssues } from '../../data/mockIssues';

export default function DashboardHome() {
  // Calculate KPI data from mock issues
  const newComplaintsToday = mockIssues.filter(issue => 
    issue.reportedDate === '2024-01-16' && issue.status === 'pending'
  ).length;

  const pendingResolution = mockIssues.filter(issue => 
    issue.status === 'pending' || issue.status === 'in_progress'
  ).length;

  const overdueIssues = mockIssues.filter(issue => 
    issue.status === 'pending' && issue.priority === 'high'
  ).length;

  const resolvedThisWeek = mockIssues.filter(issue => 
    issue.status === 'resolved'
  ).length;

  return (
    <div className="space-y-6">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="New Complaints Today"
          value={newComplaintsToday}
          icon={FiPlus}
        />
        <KPICard
          title="Pending Resolution"
          value={pendingResolution}
          icon={FiClock}
        />
        <KPICard
          title="Overdue (Breached SLA)"
          value={overdueIssues}
          icon={FiAlertTriangle}
        />
        <KPICard
          title="Resolved This Week"
          value={resolvedThisWeek}
          icon={FiCheckCircle}
        />
      </div>

      {/* Live Issue Hotspots Map Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Live Issue Hotspots</h3>
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>High Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Medium Priority</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Low Priority</span>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg h-96 border border-slate-700 overflow-hidden">
          <IssueMap />
        </div>
      </div>
    </div>
  );
}
