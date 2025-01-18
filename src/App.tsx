import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import WelcomePage from './components/WelcomePage';
import SafetyFeatures from './components/SafetyFeatures';
import HealthWellness from './components/HealthWellness';
import MentalWellness from './components/MentalWellness';
import CommunitySupport from './components/CommunitySupport';
import LegalAssistance from './components/LegalAssistance';
import CareerSupport from './components/CareerSupport';
import Insights from './components/Insights';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('dashboard');
  const [userName, setUserName] = useState('Sarah');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'dashboard':
        return <WelcomePage userName={userName} />;
      case 'tracking':
        return <SafetyFeatures />;
      case 'health':
        return <HealthWellness />;
      case 'mental':
        return <MentalWellness />;
      case 'community':
        return <CommunitySupport />;
      case 'legal':
        return <LegalAssistance />;
      case 'career':
        return <CareerSupport />;
      case 'insights':
        return <Insights />;
      default:
        return <WelcomePage userName={userName} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Top Navigation */}
      <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-pink-50 transition-colors duration-200"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Search for resources, tips, or guidance..."
                />
              </div>
            </div>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-700 hover:bg-pink-50 transition-colors duration-200 relative">
                <Bell size={24} />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-pink-500 transform translate-x-1/2 -translate-y-1/2"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-white font-medium cursor-pointer">
                {userName[0]}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onNavigate={setCurrentSection} currentSection={currentSection} />

      {/* Main Content */}
      <main className={`transition-all duration-300 pt-16 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;