import React from 'react';
import { 
  ShieldCheck,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Button, Badge } from '../shared';

export const RiskPage: React.FC = () => (
  <div className="space-y-6">
    <div className="flex gap-6 items-start">
      <div className="w-1/3 bg-white p-6 rounded-[20px] shadow-sm text-center py-8">
        <div className="inline-flex p-4 bg-[#CEF265]/20 rounded-full mb-4">
          <ShieldCheck size={48} className="text-[#2B3674]" />
        </div>
        <h2 className="text-2xl font-bold text-[#2B3674]">低风险</h2>
        <p className="text-[#A3AED0] text-sm mt-2">您的项目符合大多数软著申请规范</p>
        <div className="mt-6 flex justify-center gap-2">
          <Badge type="success">名称规范</Badge>
          <Badge type="warning">开源协议检查</Badge>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="font-bold text-[#2B3674] mb-2">详细检查报告</h3>
        
        {/* Check Item 1 */}
        <div className="bg-white p-4 rounded-xl flex items-start gap-4 shadow-sm border-l-4 border-green-500">
          <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1"><CheckCircle size={18} /></div>
          <div>
            <h4 className="font-bold text-[#2B3674]">软件名称查重</h4>
            <p className="text-sm text-[#A3AED0] mt-1">未发现完全重名的已登记软件。名称结构符合"品牌+功能+性质"规范。</p>
          </div>
          <Button className="ml-auto text-xs py-2 h-fit">查看详情</Button>
        </div>

        {/* Check Item 2 */}
        <div className="bg-white p-4 rounded-xl flex items-start gap-4 shadow-sm border-l-4 border-[#FF9F43]">
          <div className="p-2 bg-orange-100 rounded-full text-orange-600 mt-1"><AlertTriangle size={18} /></div>
          <div>
            <h4 className="font-bold text-[#2B3674]">开源许可证风险</h4>
            <p className="text-sm text-[#A3AED0] mt-1">检测到使用了 GPL 协议的库 (LeftPad)。请确认是否符合开源传染性要求，建议在说明书中声明。</p>
          </div>
          <Button className="ml-auto text-xs py-2 h-fit">去处理</Button>
        </div>

        {/* Check Item 3 */}
        <div className="bg-white p-4 rounded-xl flex items-start gap-4 shadow-sm border-l-4 border-green-500">
          <div className="p-2 bg-green-100 rounded-full text-green-600 mt-1"><CheckCircle size={18} /></div>
          <div>
            <h4 className="font-bold text-[#2B3674]">文档一致性校验</h4>
            <p className="text-sm text-[#A3AED0] mt-1">《说明书》功能点与代码结构匹配度 96%。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
