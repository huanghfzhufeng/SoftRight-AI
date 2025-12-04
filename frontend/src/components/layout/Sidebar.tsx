import React from 'react';
import { 
  Home, 
  FileText, 
  Code, 
  ShieldCheck, 
  HelpCircle, 
  Settings, 
  UploadCloud,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  id: string;
  hasSubMenu?: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon: Icon, 
  label, 
  id, 
  hasSubMenu, 
  activeTab, 
  setActiveTab 
}) => (
  <div 
    onClick={() => setActiveTab(id)}
    className={`flex items-center justify-between p-3 mb-2 rounded-xl cursor-pointer transition-all duration-200 ${
      activeTab === id
        ? 'bg-[#1B1B1B] text-white shadow-lg shadow-gray-300/50' 
        : 'text-[#A3AED0] hover:text-[#2B3674] hover:bg-gray-100'
    }`}
  >
    <div className="flex items-center gap-3">
      <Icon size={20} className={activeTab === id ? 'text-white' : ''} />
      <span className="font-medium text-sm">{label}</span>
    </div>
    {hasSubMenu && <ChevronRight size={16} />}
  </div>
);

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => (
  <div className="w-64 bg-white h-full flex flex-col justify-between p-5 shadow-xl z-20 hidden md:flex">
    <div>
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-8 h-8 bg-[#1B1B1B] rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-[#CEF265] rounded-full"></div>
        </div>
        <h1 className="text-xl font-bold text-[#2B3674] tracking-tight">
          SoftRight <span className="text-[#A3AED0]">AI</span>
        </h1>
      </div>

      <div className="space-y-1">
        <p className="px-3 text-xs font-bold text-[#A3AED0] uppercase tracking-wider mb-2">Main</p>
        <SidebarItem icon={Home} label="概览 Dashboard" id="Overview" hasSubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarItem icon={UploadCloud} label="信息采集 Input" id="Input" hasSubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <p className="px-3 text-xs font-bold text-[#A3AED0] uppercase tracking-wider mb-2 mt-6">Core Tools</p>
        <SidebarItem icon={FileText} label="文档生成 Docs" id="Docs" hasSubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarItem icon={Code} label="代码处理 Code" id="Code" hasSubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarItem icon={ShieldCheck} label="合规审查 Risk" id="Risk" hasSubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <p className="px-3 text-xs font-bold text-[#A3AED0] uppercase tracking-wider mb-2 mt-6">Support</p>
        <SidebarItem icon={HelpCircle} label="填表指南 Guide" id="Guide" hasSubMenu activeTab={activeTab} setActiveTab={setActiveTab} />
        <SidebarItem icon={Settings} label="设置 Settings" id="Settings" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>

    {/* User / Logout Area */}
    <div className="bg-[#F4F7FE] rounded-2xl p-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#1B1B1B] text-white flex items-center justify-center font-bold">D</div>
        <div className="overflow-hidden">
          <p className="text-sm font-bold text-[#2B3674] truncate">Developer</p>
          <p className="text-xs text-[#A3AED0]">Free Plan</p>
        </div>
      </div>
      <button 
        onClick={onLogout}
        className="w-full py-2 bg-white text-[#EB5757] text-xs font-bold rounded-lg border border-gray-100 hover:bg-[#EB5757] hover:text-white transition-colors flex items-center justify-center gap-2"
      >
        <LogOut size={14} /> 退出登录
      </button>
    </div>
  </div>
);
