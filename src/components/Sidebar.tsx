import React from 'react';
import { Home, MapPin, Heart, Brain, Users, Scale, Briefcase, BarChart3, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onNavigate: (section: string) => void;
  currentSection: string;
}

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'tracking', icon: MapPin, label: 'Real-Time Tracking' },
  { id: 'health', icon: Heart, label: 'Health & Wellness' },
  { id: 'mental', icon: Brain, label: 'Mental Wellness' },
  { id: 'community', icon: Users, label: 'Community Support' },
  { id: 'legal', icon: Scale, label: 'Legal Assistance' },
  { id: 'career', icon: Briefcase, label: 'Career Support' },
  { id: 'insights', icon: BarChart3, label: 'Insights' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavigate, currentSection }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-pink-50 to-white transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="h-16 flex items-center justify-center border-b border-pink-100">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
          Bolt AI
        </h1>
      </div>
      
      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center px-6 py-3 transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'bg-pink-100 text-pink-700'
                    : 'text-gray-700 hover:bg-pink-50'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;