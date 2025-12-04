import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subValue: string;
  trend: {
    value: string;
    positive: boolean;
  };
  icon: LucideIcon;
  accentColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  subValue, 
  trend, 
  icon: Icon, 
  accentColor 
}) => (
  <div className="bg-white p-5 rounded-[20px] shadow-sm flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-md transition-shadow">
    <div className={`absolute top-0 right-0 w-24 h-24 ${accentColor} opacity-10 rounded-bl-[50px] -mr-4 -mt-4 transition-transform group-hover:scale-110`}></div>
    
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-full ${accentColor} bg-opacity-20`}>
        <Icon size={24} className="text-[#2B3674]" />
      </div>
    </div>
    
    <div>
      <p className="text-[#A3AED0] text-sm font-medium mb-1">{title}</p>
      <h3 className="text-[#2B3674] text-2xl font-bold mb-2">{value}</h3>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${
          trend.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {trend.value}
        </span>
        <span className="text-[#A3AED0] text-xs">{subValue}</span>
      </div>
    </div>
  </div>
);
