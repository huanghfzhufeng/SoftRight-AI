import React from 'react';
import { 
  GitBranch,
  FileCode,
  Cpu,
  Layers,
  CheckCircle,
  X
} from 'lucide-react';
import { Card, Button } from '../shared';

export const CodePage: React.FC = () => (
  <div className="flex h-[calc(100vh-140px)] gap-6">
    {/* File Tree */}
    <Card className="w-64 flex flex-col p-4 h-full">
      <h3 className="font-bold text-[#2B3674] mb-4 flex items-center gap-2">
        <GitBranch size={16} /> 项目结构
      </h3>
      <div className="flex-1 overflow-y-auto space-y-2">
        {['src', 'components', 'utils', 'App.jsx', 'index.css', 'package.json'].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-2 hover:bg-[#F4F7FE] rounded-lg cursor-pointer text-sm text-[#A3AED0] hover:text-[#2B3674]">
            {item.includes('.') ? <FileCode size={14} /> : <Layers size={14} />}
            {item}
            {item === 'App.jsx' && <span className="ml-auto w-2 h-2 rounded-full bg-[#CEF265]"></span>}
          </div>
        ))}
      </div>
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-[#A3AED0] mb-2">
          <span>已选文件</span>
          <span className="font-bold text-[#2B3674]">12/45</span>
        </div>
        <div className="w-full bg-[#F4F7FE] h-2 rounded-full overflow-hidden">
          <div className="w-[30%] h-full bg-[#CEF265]"></div>
        </div>
      </div>
    </Card>

    {/* Main Editor/Settings */}
    <div className="flex-1 flex flex-col gap-6">
      {/* Code Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 flex items-center gap-4">
          <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Cpu size={20} /></div>
          <div><p className="text-xs text-[#A3AED0]">总行数</p><p className="font-bold text-[#2B3674]">12,405</p></div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-2 bg-green-100 text-green-600 rounded-lg"><CheckCircle size={20} /></div>
          <div><p className="text-xs text-[#A3AED0]">有效代码</p><p className="font-bold text-[#2B3674]">8,900</p></div>
        </Card>
        <Card className="p-4 flex items-center gap-4">
          <div className="p-2 bg-red-100 text-red-600 rounded-lg"><X size={20} /></div>
          <div><p className="text-xs text-[#A3AED0]">剔除注释</p><p className="font-bold text-[#2B3674]">3,505</p></div>
        </Card>
      </div>

      {/* Editor */}
      <Card className="flex-1 bg-[#1B1B1B] text-gray-300 font-mono text-sm p-0 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 bg-black/20 border-b border-white/5">
          <span className="text-xs">App.jsx - Preview</span>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-[#CEF265]/20 text-[#CEF265] text-xs">自动格式化开启</span>
          </div>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
          <p className="text-gray-500">1  // This comment will be removed in export</p>
          <p><span className="text-[#A78BFA]">import</span> React <span className="text-[#A78BFA]">from</span> 'react';</p>
          <p>&nbsp;</p>
          <p className="text-gray-500">4  /* Multi-line comment</p>
          <p className="text-gray-500">5     to be removed */</p>
          <p>6  <span className="text-[#CEF265]">const</span> App = () ={'>'} {'{'}</p>
          <p>7     <span className="text-[#A78BFA]">return</span> (</p>
          <p>8       {'<div>Hello World</div>'}</p>
          <p>9     );</p>
          <p>10 {'}'}</p>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex justify-between items-center bg-white p-4 rounded-[20px]">
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm text-[#2B3674] font-medium cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-[#CEF265] w-4 h-4" /> 剔除空行
          </label>
          <label className="flex items-center gap-2 text-sm text-[#2B3674] font-medium cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-[#CEF265] w-4 h-4" /> 剔除注释
          </label>
        </div>
        <Button primary>生成 PDF 代码文档</Button>
      </div>
    </div>
  </div>
);
