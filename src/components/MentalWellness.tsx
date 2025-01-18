import React, { useState, useEffect } from 'react';
import { Brain, Moon, Sun, Music, BookOpen, Heart } from 'lucide-react';

const MentalWellness: React.FC = () => {
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingActive, setBreathingActive] = useState(false);
  const [timer, setTimer] = useState(0);
  const [mood, setMood] = useState('');
  const [journalEntry, setJournalEntry] = useState('');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (breathingActive) {
      interval = setInterval(() => {
        setBreathingPhase(prev => {
          if (prev === 'inhale') return 'hold';
          if (prev === 'hold') return 'exhale';
          return 'inhale';
        });
      }, 4000); // Change phase every 4 seconds
    }
    return () => clearInterval(interval);
  }, [breathingActive]);

  const moodOptions = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😌', label: 'Calm' },
    { emoji: '😔', label: 'Sad' },
    { emoji: '😤', label: 'Stressed' },
    { emoji: '😴', label: 'Tired' },
  ];

  const quotes = [
    "Your peace is more important than your productivity",
    "Take care of your mind, and it will take care of you",
    "Small steps lead to big changes",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
      {/* Breathing Exercise */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mindful Breathing</h2>
        <div className="flex flex-col items-center">
          <div 
            className={`w-48 h-48 rounded-full flex items-center justify-center transition-all duration-1000 ${
              breathingActive
                ? `${
                    breathingPhase === 'inhale'
                      ? 'scale-125 bg-pink-50'
                      : breathingPhase === 'exhale'
                      ? 'scale-90 bg-white'
                      : 'scale-100 bg-pink-100'
                  }`
                : 'bg-white'
            } border-4 border-pink-500`}
          >
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-700 mb-2">
                {breathingPhase === 'inhale' ? 'Inhale' : breathingPhase === 'exhale' ? 'Exhale' : 'Hold'}
              </p>
              <p className="text-sm text-gray-500">
                {breathingPhase === 'inhale' ? 'Breathe in deeply' : breathingPhase === 'exhale' ? 'Release slowly' : 'Hold gently'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setBreathingActive(!breathingActive)}
            className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            {breathingActive ? 'Stop Exercise' : 'Start Breathing'}
          </button>
        </div>
      </div>

      {/* Mood Tracker */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mood Journal</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-4">
            {moodOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setMood(option.label)}
                className={`p-4 rounded-xl text-center transition-all ${
                  mood === option.label
                    ? 'bg-pink-100 scale-105'
                    : 'bg-gray-50 hover:bg-pink-50'
                }`}
              >
                <span className="text-2xl mb-2 block">{option.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{option.label}</span>
              </button>
            ))}
          </div>
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="How are you feeling today? What's on your mind?"
            className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <button className="w-full py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors">
            Save Entry
          </button>
        </div>
      </div>

      {/* Daily Quote */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Inspiration</h2>
        <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-white rounded-xl">
          <p className="text-xl font-medium text-gray-700 italic">
            "{quotes[Math.floor(Math.random() * quotes.length)]}"
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Wellness Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
            <Music className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <span className="font-medium text-gray-700">Calming Sounds</span>
          </button>
          <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
            <BookOpen className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <span className="font-medium text-gray-700">Guided Journal</span>
          </button>
          <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
            <Moon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <span className="font-medium text-gray-700">Sleep Stories</span>
          </button>
          <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
            <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" />
            <span className="font-medium text-gray-700">Self-Care Tips</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentalWellness;