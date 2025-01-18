import React, { useState, useEffect } from 'react';
import { Heart, Brain, Activity, Calendar, Moon, Sun, Clock, Droplet, Apple } from 'lucide-react';

interface HealthMetric {
  value: number;
  trend: 'up' | 'down' | 'stable';
  goal: number;
}

interface MenstrualData {
  date: Date;
  symptoms: string[];
  mood: string;
  flow: 'light' | 'medium' | 'heavy' | null;
}

const HealthWellness: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [menstrualData, setMenstrualData] = useState<MenstrualData[]>([]);
  const [healthMetrics, setHealthMetrics] = useState<{
    steps: HealthMetric;
    heartRate: HealthMetric;
    sleepHours: HealthMetric;
    hydration: HealthMetric;
    nutrition: HealthMetric;
  }>({
    steps: { value: 8432, trend: 'up', goal: 10000 },
    heartRate: { value: 72, trend: 'stable', goal: 70 },
    sleepHours: { value: 7.5, trend: 'up', goal: 8 },
    hydration: { value: 6, trend: 'down', goal: 8 },
    nutrition: { value: 1800, trend: 'stable', goal: 2000 }
  });

  // Generate calendar dates
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];
    
    for (let d = firstDay; d <= lastDay; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(selectedDate);

  // Mock period prediction
  const isPeriodDay = (date: Date) => {
    const cycleLength = 28;
    const dayOfCycle = Math.floor((date.getTime() - new Date(2024, 0, 15).getTime()) / (1000 * 60 * 60 * 24)) % cycleLength;
    return dayOfCycle < 5;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Health Metrics */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Health Overview</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-pink-50 rounded-xl">
              <Activity className="w-6 h-6 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium text-gray-600">Steps</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">{healthMetrics.steps.value}</p>
                <p className="text-sm text-gray-500">Goal: {healthMetrics.steps.goal}</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${(healthMetrics.steps.value / healthMetrics.steps.goal) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <Heart className="w-6 h-6 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium text-gray-600">Heart Rate</h3>
              <p className="text-2xl font-bold text-gray-800">{healthMetrics.heartRate.value} bpm</p>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: '72%' }}
                ></div>
              </div>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <Moon className="w-6 h-6 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium text-gray-600">Sleep</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">{healthMetrics.sleepHours.value}h</p>
                <p className="text-sm text-gray-500">Goal: {healthMetrics.sleepHours.goal}h</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${(healthMetrics.sleepHours.value / healthMetrics.sleepHours.goal) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <Droplet className="w-6 h-6 text-pink-500 mb-2" />
              <h3 className="text-sm font-medium text-gray-600">Hydration</h3>
              <div className="flex items-end justify-between">
                <p className="text-2xl font-bold text-gray-800">{healthMetrics.hydration.value}L</p>
                <p className="text-sm text-gray-500">Goal: {healthMetrics.hydration.goal}L</p>
              </div>
              <div className="h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="h-full bg-pink-500 rounded-full"
                  style={{ width: `${(healthMetrics.hydration.value / healthMetrics.hydration.goal) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Tracking */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nutrition Tracking</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Daily Calories</p>
                <p className="text-2xl font-bold text-gray-800">{healthMetrics.nutrition.value} / {healthMetrics.nutrition.goal}</p>
              </div>
              <Apple className="w-8 h-8 text-pink-500" />
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(healthMetrics.nutrition.value / healthMetrics.nutrition.goal) * 100}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Protein</p>
                <p className="font-bold text-gray-800">65g</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Carbs</p>
                <p className="font-bold text-gray-800">220g</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Fats</p>
                <p className="font-bold text-gray-800">55g</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Period Tracker */}
      <div className="space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Period Tracker</h2>
          
          {/* Calendar */}
          <div className="mb-6">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {daysInMonth.map((date, index) => {
                const isToday = date.toDateString() === new Date().toDateString();
                const isPeriod = isPeriodDay(date);
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`p-2 rounded-lg text-center transition-all ${
                      isToday
                        ? 'bg-pink-500 text-white'
                        : isPeriod
                        ? 'bg-pink-100 text-pink-700'
                        : 'hover:bg-pink-50'
                    }`}
                  >
                    <span className="text-sm">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Symptoms Tracking */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Track Symptoms</h3>
            <div className="flex flex-wrap gap-2">
              {['Cramps', 'Headache', 'Fatigue', 'Bloating', 'Mood Swings'].map((symptom) => (
                <button
                  key={symptom}
                  className="px-3 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-sm text-gray-700"
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>

          {/* Cycle Insights */}
          <div className="mt-6 p-4 bg-pink-50 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Cycle Insights</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Last Period: 7 days ago</p>
              <p>Cycle Length: 28 days</p>
              <p>Next Period: Expected in 21 days</p>
            </div>
          </div>
        </div>

        {/* Wellness Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Personalized Wellness Tips</h2>
          <div className="space-y-4">
            <div className="p-4 bg-pink-50 rounded-xl">
              <h3 className="font-semibold text-gray-800 mb-2">Today's Recommendations</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Droplet className="w-4 h-4 text-pink-500 mr-2" />
                  Increase water intake
                </li>
                <li className="flex items-center">
                  <Activity className="w-4 h-4 text-pink-500 mr-2" />
                  Light exercise recommended
                </li>
                <li className="flex items-center">
                  <Moon className="w-4 h-4 text-pink-500 mr-2" />
                  Get 8 hours of sleep
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWellness;