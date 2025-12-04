import React, { useState } from 'react';
import { 
  FileText, 
  Code, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff,
  Github
} from 'lucide-react';
import { Button } from '../shared';
import { colors } from '../../styles/colors';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className={`min-h-screen ${colors.bg} flex items-center justify-center p-6 relative overflow-hidden`}>
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#CEF265] rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#A78BFA] rounded-full blur-[120px] opacity-20"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[30px] shadow-2xl overflow-hidden min-h-[600px]">
        {/* Left Side: Illustration/Brand */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-[#1B1B1B] text-white relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-[#CEF265] rounded-full"></div>
              <h1 className="text-2xl font-bold tracking-tight">SoftRight <span className="text-gray-400">AI</span></h1>
            </div>
            <p className="text-gray-400 text-sm">智能软著申请助手</p>
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              让繁琐的软著申请<br />
              变得<span className="text-[#CEF265]">简单高效</span>。
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                <div className="p-2 bg-[#CEF265] rounded-lg text-[#1B1B1B]"><FileText size={20} /></div>
                <div>
                  <p className="font-bold text-sm">自动生成说明书</p>
                  <p className="text-xs text-gray-400">一键解析，智能撰写</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                <div className="p-2 bg-[#A78BFA] rounded-lg text-white"><Code size={20} /></div>
                <div>
                  <p className="font-bold text-sm">智能代码清洗</p>
                  <p className="text-xs text-gray-400">自动抽样，剔除注释</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 relative z-10">© 2025 SoftRight AI. All Rights Reserved.</p>
          
          {/* Abstract Circle Decoration */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CEF265] opacity-10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#2B3674] mb-2">欢迎回来! 👋</h2>
            <p className="text-[#A3AED0]">请输入您的账号信息以继续</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#2B3674]">电子邮箱</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="mail@example.com" 
                  className="w-full p-4 pl-11 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] placeholder-[#A3AED0] outline-none transition-all"
                  defaultValue="demo@softright.ai"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#2B3674]">密码</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters" 
                  className="w-full p-4 pl-11 pr-11 bg-[#F4F7FE] rounded-xl border-none focus:ring-2 focus:ring-[#CEF265] text-[#2B3674] placeholder-[#A3AED0] outline-none transition-all"
                  defaultValue="password123"
                />
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A3AED0]" size={18} />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A3AED0] hover:text-[#2B3674]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#CEF265] focus:ring-[#CEF265] accent-[#CEF265]" defaultChecked />
                <span className="text-sm text-[#A3AED0]">记住我</span>
              </label>
              <a href="#" className="text-sm font-bold text-[#2B3674] hover:text-[#CEF265]">忘记密码?</a>
            </div>

            <Button primary className="w-full py-4 text-base">
              立即登录
            </Button>
          </form>

          <div className="mt-8 relative text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative bg-white px-4 text-xs text-[#A3AED0] uppercase">Or sign in with</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors text-sm font-medium text-[#2B3674]">
              <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600">G</div>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors text-sm font-medium text-[#2B3674]">
              <Github size={16} />
              Github
            </button>
          </div>
          
          <p className="mt-8 text-center text-sm text-[#A3AED0]">
            还没有账号? <a href="#" className="font-bold text-[#2B3674] hover:text-[#CEF265]">立即注册</a>
          </p>
        </div>
      </div>
    </div>
  );
};
