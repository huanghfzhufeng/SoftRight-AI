import React from 'react';
import { 
  FileText, 
  Code, 
  Search,
  Download,
  RefreshCw
} from 'lucide-react';
import { Card, Button, Badge } from '../shared';

export const DocsPage: React.FC = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold text-[#2B3674]">文档自动化生成</h2>
        <p className="text-sm text-[#A3AED0]">基于采集的信息自动生成标准申请文档</p>
      </div>
      <Button primary><RefreshCw size={16} /> 重新生成全部</Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Software Manual Card */}
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9F43] opacity-10 rounded-bl-full -mr-8 -mt-8"></div>
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-[#FF9F43]/20 text-[#FF9F43] rounded-xl">
            <FileText size={28} />
          </div>
          <Badge type="success">已生成</Badge>
        </div>
        <h3 className="text-xl font-bold text-[#2B3674] mb-2">软件说明书.docx</h3>
        <p className="text-sm text-[#A3AED0] mb-6">包含：软件结构、功能描述、输入输出、运行环境等完整章节。</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm p-3 bg-[#F4F7FE] rounded-lg">
            <span className="text-[#2B3674] font-medium">页数估算</span>
            <span className="text-[#A3AED0]">18 页</span>
          </div>
          <div className="flex items-center justify-between text-sm p-3 bg-[#F4F7FE] rounded-lg">
            <span className="text-[#2B3674] font-medium">图片数量</span>
            <span className="text-[#A3AED0]">12 张 (自动截图)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Button>预览</Button>
          <Button primary className="bg-[#1B1B1B] text-white hover:bg-gray-800 shadow-none"><Download size={16} /> 下载</Button>
        </div>
      </Card>

      {/* Code Sample Card */}
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A78BFA] opacity-10 rounded-bl-full -mr-8 -mt-8"></div>
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-[#A78BFA]/20 text-[#A78BFA] rounded-xl">
            <Code size={28} />
          </div>
          <Badge type="warning">处理中</Badge>
        </div>
        <h3 className="text-xl font-bold text-[#2B3674] mb-2">源代码文档.pdf</h3>
        <p className="text-sm text-[#A3AED0] mb-6">标准格式：前30页 + 后30页，自动剔除注释与空行。</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm p-3 bg-[#F4F7FE] rounded-lg">
            <span className="text-[#2B3674] font-medium">代码行数</span>
            <span className="text-[#A3AED0]">3,450 行</span>
          </div>
          <div className="flex items-center justify-between text-sm p-3 bg-[#F4F7FE] rounded-lg">
            <span className="text-[#2B3674] font-medium">抽样规则</span>
            <span className="text-[#A3AED0]">首尾各30页</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-6">
          <Button>配置规则</Button>
          <Button primary disabled className="bg-gray-200 text-gray-400 shadow-none cursor-not-allowed">等待中...</Button>
        </div>
      </Card>
    </div>

    {/* Preview Area Placeholder */}
    <div className="border border-gray-100 bg-gray-50 rounded-[20px] p-8 text-center">
      <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center shadow-sm mb-4">
        <Search size={24} className="text-[#A3AED0]" />
      </div>
      <p className="text-[#2B3674] font-bold">点击上方"预览"查看文档详情</p>
      <p className="text-xs text-[#A3AED0] mt-1">支持在线编辑与实时保存</p>
    </div>
  </div>
);
