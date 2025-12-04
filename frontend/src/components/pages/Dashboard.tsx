import React from 'react';
import { 
  FileText, 
  Code, 
  ShieldCheck, 
  UploadCloud,
  Calendar as CalendarIcon,
  Download,
  MoreHorizontal
} from 'lucide-react';
import { Card, StatCard } from '../shared';

export const Dashboard: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    {/* Action Bar */}
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p className="text-[#A3AED0] text-sm font-medium">今日工作概览</p>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#2B3674] text-sm font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
          <CalendarIcon size={16} /> 2025年10月
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-[#2B3674] text-sm font-bold rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
          <Download size={16} /> 导出报表
        </button>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="当前文档生成进度" 
        value="85%" 
        subValue="预计10分钟后完成" 
        trend={{value: "+12%", positive: true}} 
        icon={FileText} 
        accentColor="bg-[#CEF265]" 
      />
      <StatCard 
        title="代码抽样页数" 
        value="60页" 
        subValue="符合官方要求" 
        trend={{value: "Done", positive: true}} 
        icon={Code} 
        accentColor="bg-[#A78BFA]" 
      />
      <StatCard 
        title="潜在风险项" 
        value="0个" 
        subValue="名称/代码合规" 
        trend={{value: "-2", positive: true}} 
        icon={ShieldCheck} 
        accentColor="bg-[#FF9F43]" 
      />
      <StatCard 
        title="预计节省时间" 
        value="4.5h" 
        subValue="相比人工填报" 
        trend={{value: "+25%", positive: true}} 
        icon={UploadCloud} 
        accentColor="bg-blue-400" 
      />
    </div>

    {/* Main Content Area */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-[20px] shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#2B3674]">申请流程自动化追踪</h3>
            <p className="text-sm text-[#A3AED0] mt-1">实时监控各模块处理状态</p>
          </div>
        </div>
        <div className="h-64 w-full flex items-end justify-between gap-4 px-4">
          {['信息解析', '说明书生成', '代码清洗', '查重审查', '填表归档'].map((label, idx) => {
            const heights = ['40%', '85%', '30%', '20%', '10%'];
            const barColors = ['bg-[#FF9F43]', 'bg-[#CEF265]', 'bg-[#A78BFA]', 'bg-blue-300', 'bg-gray-300'];
            const isActive = idx === 1;
            
            return (
              <div key={idx} className="w-full flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-full bg-[#F4F7FE] rounded-t-xl relative h-48 overflow-hidden">
                  <div 
                    className={`absolute bottom-0 w-full ${barColors[idx]} rounded-t-xl transition-all duration-500 ${isActive ? 'shadow-[0_0_20px_rgba(206,242,101,0.5)]' : 'opacity-60'}`} 
                    style={{height: heights[idx]}}
                  ></div>
                </div>
                <span className={`text-xs font-bold ${isActive ? 'text-[#2B3674]' : 'text-[#A3AED0]'}`}>{label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Card className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#2B3674]">合规性评分</h3>
            <div className="bg-[#F4F7FE] p-2 rounded-full"><MoreHorizontal size={16} /></div>
          </div>
          <div className="flex items-center gap-6 justify-center h-full pb-4">
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-[#A78BFA] to-[#FF9F43] flex items-center justify-center shadow-inner">
              <div className="absolute w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-[#2B3674]">98%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);
