import React from 'react';

const KPICard = ({ title, value, icon: Icon, className = '' }) => {
  return (
    <div className={`bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-200 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Icon on the left */}
        <div className="flex-shrink-0">
          {Icon && (
            <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
              <Icon className="text-emerald-400" size={24} />
            </div>
          )}
        </div>

        {/* Value and title on the right */}
        <div className="flex-1 ml-4 text-right">
          <div className="text-3xl font-bold text-white mb-1">
            {value}
          </div>
          <div className="text-slate-400 text-sm font-medium">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPICard;
