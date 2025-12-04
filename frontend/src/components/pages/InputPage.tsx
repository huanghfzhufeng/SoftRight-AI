import React from 'react';
import { 
  UploadCloud,
  RefreshCw,
  ArrowRight,
  Github
} from 'lucide-react';
import { Card, Button } from '../shared';

export const InputPage: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left: Basic Info Form */}
      <Card className="lg:col-span-2">
        <h3 className="text-lg font-bold text-[#2B3674] mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#F4F7FE] flex items-center justify-center text-[#2B3674] text-sm">1</span>
          软件基础信息
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2B3674]">软件全称</label>
            <input 
              type="text" 
              className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] placeholder-[#A3AED0]" 
              placeholder="例如：智能物流管理系统" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2B3674]">版本号</label>
            <input 
              type="text" 
              className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674]" 
              defaultValue="V1.0" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2B3674]">开发完成日期</label>
            <input 
              type="date" 
              className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674]" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#2B3674]">权利取得方式</label>
            <select className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674]">
              <option>原始取得</option>
              <option>继受取得</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 space-y-2">
            <label className="text-sm font-bold text-[#2B3674]">开发目的与功能简介 (支持AI扩写)</label>
            <textarea 
              className="w-full p-4 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] h-32" 
              placeholder="简要描述软件的主要功能，AI将自动生成完整的技术说明书..."
            ></textarea>
            <div className="flex justify-end">
              <button className="text-xs font-bold text-[#A78BFA] flex items-center gap-1 hover:text-[#2B3674] transition-colors">
                <RefreshCw size={12} /> AI 优化描述
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Right: Upload Zone */}
      <div className="space-y-6">
        <Card className="h-full flex flex-col justify-center items-center border-2 border-dashed border-[#E0E5F2] hover:border-[#CEF265] transition-colors cursor-pointer group">
          <div className="p-4 bg-[#F4F7FE] rounded-full text-[#A3AED0] group-hover:bg-[#CEF265] group-hover:text-[#1B1B1B] transition-colors mb-4">
            <UploadCloud size={32} />
          </div>
          <h4 className="font-bold text-[#2B3674] mb-2">上传原始文档</h4>
          <p className="text-xs text-[#A3AED0] text-center px-4">
            支持 Word, PDF, Markdown<br/>
            用户手册、设计文档等
          </p>
        </Card>
        
        <div className="bg-[#1B1B1B] p-6 rounded-[20px] text-white">
          <h4 className="font-bold flex items-center gap-2 mb-4">
            <Github size={18} /> 连接代码仓库
          </h4>
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="Repository URL" 
              className="w-full p-3 bg-white/10 rounded-lg text-sm border-none text-white placeholder-gray-500 focus:bg-white/20" 
            />
            <input 
              type="password" 
              placeholder="Access Token (Optional)" 
              className="w-full p-3 bg-white/10 rounded-lg text-sm border-none text-white placeholder-gray-500 focus:bg-white/20" 
            />
            <Button primary className="w-full mt-2">分析仓库</Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex justify-end pt-4">
      <Button primary className="px-8">保存并下一步 <ArrowRight size={16} /></Button>
    </div>
  </div>
);
