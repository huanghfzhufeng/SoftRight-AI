import React from 'react';
import { Bell, Settings, Search } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
}

const getPageTitle = (tab: string): string => {
  const titles: Record<string, string> = {
    'Overview': '欢迎回来, 开发者! 👋',
    'Input': '项目基础信息采集',
    'Docs': '申请文档生成',
    'Code': '源代码清洗与抽样',
    'Risk': '智能合规性审查',
    'Guide': '申请流程指引',
    'Settings': '系统设置'
  };
  return titles[tab] || '欢迎回来, 开发者! 👋';
};

export const Header: React.FC<HeaderProps> = ({ activeTab }) => (
  <header className="h-20 flex items-center justify-between px-8 py-4 bg-[#F4F7FE] md:bg-transparent backdrop-blur-sm z-10 shrink-0">
    <div className="flex flex-col">
      <span className="text-sm text-[#707EAE]">Pages / {activeTab}</span>
      <h2 className="text-2xl font-bold text-[#2B3674]">{getPageTitle(activeTab)}</h2>
    </div>

    <div className="flex items-center gap-4 bg-white/50 p-2 rounded-full shadow-sm backdrop-blur-md">
      <div className="relative hidden md:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2B3674]" size={16} />
        <input 
          type="text" 
          placeholder="搜索项目..." 
          className="pl-10 pr-4 py-2 bg-[#F4F7FE] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#CEF265] w-64 text-[#2B3674]"
        />
      </div>
      <button className="p-2 text-[#A3AED0] hover:text-[#2B3674] transition-colors"><Bell size={20} /></button>
      <button className="p-2 text-[#A3AED0] hover:text-[#2B3674] transition-colors"><Settings size={20} /></button>
      <div className="w-10 h-10 rounded-full bg-[#1B1B1B] text-white flex items-center justify-center font-bold shadow-lg">
        Dev
      </div>
    </div>
  </header>
);
