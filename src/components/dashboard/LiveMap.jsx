import React from 'react';
import IssueMap from './IssueMap';

export default function LiveMap() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Live Issue Map</h1>
          <p className="text-slate-400">Real-time visualization of all reported issues across the city</p>
        </div>
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
      
      <div className="bg-slate-800 rounded-lg h-[600px] border border-slate-700 overflow-hidden">
        <IssueMap />
      </div>
    </div>
  );
}
