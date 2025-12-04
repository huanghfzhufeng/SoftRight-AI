import React from 'react';
import { Clipboard, CheckCircle } from 'lucide-react';
import { Card, Button } from '../shared';

const steps = [
  { title: '网报注册', desc: '在中国版权保护中心官网注册账号并实名认证。', active: true },
  { title: '在线填表', desc: '根据本系统生成的信息，在官网填写申请表并打印。', active: true },
  { title: '材料准备', desc: '准备盖章的申请表、源码文档、说明书及身份证明复印件。', active: false },
  { title: '递交材料', desc: '邮寄或现场递交至版权保护中心。', active: false },
  { title: '受理与补正', desc: '等待受理通知书（约30个工作日），如有补正需在30日内提交。', active: false },
  { title: '获得证书', desc: '审核通过，领取著作权登记证书。', active: false },
];

const materials = [
  '计算机软件著作权登记申请表 (盖公章)',
  '软件鉴别材料 (源代码 + 说明书)',
  '申请人身份证明文件复印件 (盖公章)',
  '联系人身份证复印件',
  '权利归属证明文件 (如是继受取得)'
];

export const GuidePage: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#2B3674]">申请流程指南</h2>
      <div className="relative border-l-2 border-[#E0E5F2] ml-4 space-y-8 pl-8 py-2">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-[41px] top-0 w-6 h-6 rounded-full border-2 ${
              step.active ? 'bg-[#CEF265] border-[#CEF265]' : 'bg-white border-[#E0E5F2]'
            }`}></div>
            <h4 className={`font-bold ${step.active ? 'text-[#2B3674]' : 'text-[#A3AED0]'}`}>{step.title}</h4>
            <p className="text-sm text-[#A3AED0] mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    <Card className="h-fit bg-[#F4F7FE] border-none">
      <h3 className="font-bold text-[#2B3674] mb-4 flex items-center gap-2">
        <Clipboard size={18} /> 所需材料清单
      </h3>
      <ul className="space-y-3">
        {materials.map((item, i) => (
          <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
            <div className="w-5 h-5 rounded border border-[#CEF265] flex items-center justify-center text-[#CEF265]">
              <CheckCircle size={12} fill="#CEF265" />
            </div>
            <span className="text-sm text-[#2B3674] font-medium">{item}</span>
          </li>
        ))}
      </ul>
      <Button primary className="w-full mt-6">下载材料清单 Checklist</Button>
    </Card>
  </div>
);
