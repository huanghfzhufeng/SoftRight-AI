import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Key,
  Save,
  Moon,
  Sun
} from 'lucide-react';
import { Card, Button } from '../shared';

export const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Settings Menu */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-bold text-[#2B3674] mb-4">设置菜单</h3>
            <div className="space-y-2">
              {[
                { icon: User, label: '个人资料', active: true },
                { icon: Bell, label: '通知设置', active: false },
                { icon: Shield, label: '安全设置', active: false },
                { icon: Palette, label: '外观主题', active: false },
                { icon: Globe, label: '语言设置', active: false },
                { icon: Key, label: 'API 密钥', active: false },
              ].map((item, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
                    item.active 
                      ? 'bg-[#CEF265] text-[#1B1B1B]' 
                      : 'hover:bg-[#F4F7FE] text-[#A3AED0]'
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right: Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Card>
            <h3 className="font-bold text-[#2B3674] mb-6 flex items-center gap-2">
              <User size={20} /> 个人资料
            </h3>
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-[#1B1B1B] text-white flex items-center justify-center text-2xl font-bold">
                D
              </div>
              <div>
                <button className="px-4 py-2 bg-[#CEF265] text-[#1B1B1B] text-sm font-bold rounded-lg hover:bg-[#bce640] transition-colors">
                  更换头像
                </button>
                <p className="text-xs text-[#A3AED0] mt-2">支持 JPG, PNG 格式，最大 2MB</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2B3674]">用户名</label>
                <input 
                  type="text" 
                  defaultValue="Developer"
                  className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2B3674]">邮箱</label>
                <input 
                  type="email" 
                  defaultValue="demo@softright.ai"
                  className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2B3674]">公司名称</label>
                <input 
                  type="text" 
                  placeholder="用于软著申请"
                  className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] placeholder-[#A3AED0]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2B3674]">联系电话</label>
                <input 
                  type="tel" 
                  placeholder="用于接收通知"
                  className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] placeholder-[#A3AED0]" 
                />
              </div>
            </div>
          </Card>

          {/* Notification Section */}
          <Card>
            <h3 className="font-bold text-[#2B3674] mb-6 flex items-center gap-2">
              <Bell size={20} /> 通知设置
            </h3>
            <div className="space-y-4">
              {[
                { key: 'email', label: '邮件通知', desc: '文档生成完成时发送邮件提醒' },
                { key: 'push', label: '浏览器推送', desc: '实时推送处理进度更新' },
                { key: 'weekly', label: '周报摘要', desc: '每周发送项目进度汇总' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-[#F4F7FE] rounded-xl">
                  <div>
                    <p className="font-medium text-[#2B3674]">{item.label}</p>
                    <p className="text-xs text-[#A3AED0]">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={notifications[item.key as keyof typeof notifications]}
                      onChange={(e) => setNotifications({...notifications, [item.key]: e.target.checked})}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#CEF265]"></div>
                  </label>
                </div>
              ))}
            </div>
          </Card>

          {/* Theme Section */}
          <Card>
            <h3 className="font-bold text-[#2B3674] mb-6 flex items-center gap-2">
              <Palette size={20} /> 外观主题
            </h3>
            <div className="flex gap-4">
              <div 
                onClick={() => setDarkMode(false)}
                className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  !darkMode ? 'border-[#CEF265] bg-[#CEF265]/10' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sun size={20} className="text-[#FF9F43]" />
                  <span className="font-medium text-[#2B3674]">浅色模式</span>
                </div>
                <div className="h-16 bg-white rounded-lg border border-gray-100 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#F4F7FE] rounded"></div>
                </div>
              </div>
              <div 
                onClick={() => setDarkMode(true)}
                className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  darkMode ? 'border-[#CEF265] bg-[#CEF265]/10' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Moon size={20} className="text-[#A78BFA]" />
                  <span className="font-medium text-[#2B3674]">深色模式</span>
                </div>
                <div className="h-16 bg-[#1B1B1B] rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#2B2B2B] rounded"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* API Key Section */}
          <Card>
            <h3 className="font-bold text-[#2B3674] mb-6 flex items-center gap-2">
              <Key size={20} /> API 密钥
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2B3674]">Google API Key</label>
                <input 
                  type="password" 
                  defaultValue="sk-xxxxxxxxxxxxxxxx"
                  className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674]" 
                />
                <p className="text-xs text-[#A3AED0]">用于 AI 文档生成和代码分析</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#2B3674]">GitHub Token (可选)</label>
                <input 
                  type="password" 
                  placeholder="ghp_xxxxxxxxxxxx"
                  className="w-full p-3 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] placeholder-[#A3AED0]" 
                />
                <p className="text-xs text-[#A3AED0]">用于访问私有仓库</p>
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button primary className="px-8">
              <Save size={16} /> 保存设置
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
