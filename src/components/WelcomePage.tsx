import React, { useState, useEffect } from 'react';
import { Shield, Heart, Users, ArrowRight, MapPin } from 'lucide-react';
import SafetyFeatures from './SafetyFeatures';
import HealthWellness from './HealthWellness';
interface WelcomePageProps {
  userName: string;
}
const features = [
  {
    icon: Shield,
    title: 'Real-Time Protection',
    description: 'Stay safe with AI-powered location tracking and smart alerts',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Track your health metrics and get personalized wellness recommendations',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Connect with a supportive community of empowered women',
  },
];

const WelcomePage: React.FC<WelcomePageProps> = ({userName}) => {
  const [typedText, setTypedText] = useState('');
  const [currentSection, setCurrentSection] = useState<'welcome' | 'safety' | 'health'>('welcome');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const fullText = 'Empowered women empower the world';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const testimonials = [
    {
      text: "SafetyCenter has transformed how I navigate my daily life. I feel more secure and empowered than ever.",
      author: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    },
    {
      text: "The wellness tracking features have helped me maintain a better work-life balance.",
      author: "Maria Garcia",
      role: "Healthcare Professional",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    },
    {
      text: "The community support system is incredible. I've connected with amazing women worldwide.",
      author: "Lisa Chen",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (currentSection === 'safety') {
    return <SafetyFeatures />;
  }

  if (currentSection === 'health') {
    return <HealthWellness />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {typedText}
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your personal AI companion for safety, wellness, and empowerment
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setCurrentSection('safety')}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
            <button 
              onClick={() => setCurrentSection('health')}
              className="px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300"
            >
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Protection & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience a new level of personal safety and wellness with our AI-powered features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white to-pink-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Women Worldwide
            </h2>
          </div>
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-500 transform ${
                  index === currentTestimonialIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                  <p className="text-gray-600 text-lg mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i === currentTestimonialIndex ? 'bg-pink-500' : 'bg-pink-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
