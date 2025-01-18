import React from 'react';
import { BarChart3, TrendingUp, Activity, Calendar } from 'lucide-react';

const Insights: React.FC = () => {
  const safetyStats = {
    safeRoutes: 85,
    incidentPrevention: 92,
    communityRating: 4.8,
    activeUsers: 15234
  };

  const wellnessStats = {
    physicalHealth: 78,
    mentalHealth: 82,
    stressLevel: 45,
    sleepQuality: 72
  };

  const monthlyProgress = [
    { month: 'Jan', safety: 75, wellness: 68 },
    { month: 'Feb', safety: 82, wellness: 75 },
    { month: 'Mar', safety: 85, wellness: 82 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Safety Insights */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Safety Analytics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Safe Routes Used</p>
              <p className="text-2xl font-bold text-gray-800">{safetyStats.safeRoutes}%</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${safetyStats.safeRoutes}%` }}
                ></div>
              </div>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Incident Prevention</p>
              <p className="text-2xl font-bold text-gray-800">{safetyStats.incidentPrevention}%</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${safetyStats.incidentPrevention}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Monthly Progress</h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlyProgress.map((data) => (
              <div key={data.month} className="flex-1 space-y-2">
                <div className="relative h-64">
                  <div 
                    className="absolute bottom-0 w-full bg-pink-200 rounded-t-lg"
                    style={{ height: `${data.safety}%` }}
                  ></div>
                  <div 
                    className="absolute bottom-0 w-full bg-pink-500 rounded-t-lg"
                    style={{ height: `${data.wellness}%` }}
                  ></div>
                </div>
                <p className="text-center text-sm text-gray-600">{data.month}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Wellness</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-pink-200 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Safety</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wellness Insights */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Wellness Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 rounded-xl">
              <Activity className="w-6 h-6 text-pink-500 mb-2" />
              <p className="text-sm text-gray-600 mb-1">Physical Health</p>
              <p className="text-2xl font-bold text-gray-800">{wellnessStats.physicalHealth}%</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${wellnessStats.physicalHealth}%` }}
                ></div>
              </div>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-pink-500 mb-2" />
              <p className="text-sm text-gray-600 mb-1">Mental Health</p>
              <p className="text-2xl font-bold text-gray-800">{wellnessStats.mentalHealth}%</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${wellnessStats.mentalHealth}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Wellness Check-in</p>
                <p className="text-sm text-gray-500">Completed daily wellness assessment</p>
              </div>
              <span className="text-sm text-gray-500 ml-auto">2h ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                <Activity className="w-5 h-5 text-pink-500" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Safety Route Used</p>
                <p className="text-sm text-gray-500">Followed recommended safe route</p>
              </div>
              <span className="text-sm text-gray-500 ml-auto">5h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;