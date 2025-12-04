import React, { useState } from 'react';
import { Sidebar, Header } from './components/layout';
import { 
  Dashboard, 
  InputPage, 
  DocsPage, 
  CodePage, 
  RiskPage, 
  GuidePage,
  LoginPage,
  SettingsPage
} from './components/pages';
import { colors } from './styles/colors';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview': return <Dashboard />;
      case 'Input': return <InputPage />;
      case 'Docs': return <DocsPage />;
      case 'Code': return <CodePage />;
      case 'Risk': return <RiskPage />;
      case 'Guide': return <GuidePage />;
      case 'Settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  // 未登录显示登录页
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className={`flex h-screen ${colors.bg} font-sans overflow-hidden selection:bg-[#CEF265] selection:text-black`}>
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header activeTab={activeTab} />

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
