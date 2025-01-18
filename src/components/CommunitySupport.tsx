import React, { useState } from 'react';
import { Users, MessageCircle, Calendar, Award, Share2, ThumbsUp } from 'lucide-react';

const CommunitySupport: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      author: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
      category: "success",
      title: "How I Found My Dream Job in Tech",
      content: "After months of preparation and support from this amazing community...",
      likes: 245,
      comments: 56,
      time: "2h ago"
    },
    {
      id: 2,
      author: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
      category: "support",
      title: "Seeking Advice: Career Transition",
      content: "I'm considering a switch to software development. Any tips?",
      likes: 123,
      comments: 89,
      time: "5h ago"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Women in Tech Meetup",
      date: "Mar 15, 2024",
      time: "6:00 PM",
      location: "Virtual",
      attendees: 156
    },
    {
      id: 2,
      title: "Career Development Workshop",
      date: "Mar 20, 2024",
      time: "2:00 PM",
      location: "Virtual",
      attendees: 89
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      {/* Main Feed */}
      <div className="lg:col-span-2 space-y-6">
        {/* Create Post */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-white font-medium">
              EW
            </div>
            <button className="flex-1 text-left px-4 py-3 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
              Share your thoughts or ask for support...
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="flex-1 py-2 rounded-xl hover:bg-pink-50 transition-colors text-gray-600">
              <MessageCircle className="w-5 h-5 mx-auto" />
            </button>
            <button className="flex-1 py-2 rounded-xl hover:bg-pink-50 transition-colors text-gray-600">
              <Calendar className="w-5 h-5 mx-auto" />
            </button>
            <button className="flex-1 py-2 rounded-xl hover:bg-pink-50 transition-colors text-gray-600">
              <Share2 className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <img src={post.avatar} alt={post.author} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-gray-800">{post.author}</h3>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <button className="flex items-center space-x-2 hover:text-pink-500">
                <ThumbsUp className="w-4 h-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-pink-500">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments} Comments</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-pink-500">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-4 bg-pink-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">{event.title}</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} at {event.time}
                  </p>
                  <p className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} attending
                  </p>
                </div>
                <button className="mt-3 w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Join Event
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Community Leaders */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Community Leaders</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80"
                  alt="Leader"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <Award className="w-4 h-4 text-pink-500 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Dr. Sarah Chen</h3>
                <p className="text-sm text-gray-500">Tech Leadership Expert</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80"
                  alt="Leader"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <Award className="w-4 h-4 text-pink-500 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Maria Garcia</h3>
                <p className="text-sm text-gray-500">Career Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;