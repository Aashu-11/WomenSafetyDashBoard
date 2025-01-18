import React from 'react';
import { Briefcase, Book, Award, Users, Calendar, FileText } from 'lucide-react';

const CareerSupport: React.FC = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      type: "Full-time",
      posted: "2 days ago",
      matches: "95% match"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Hybrid",
      type: "Full-time",
      posted: "1 day ago",
      matches: "88% match"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Resume Writing Workshop",
      date: "Mar 18, 2024",
      time: "3:00 PM",
      type: "Virtual",
      attendees: 45
    },
    {
      id: 2,
      title: "Tech Interview Prep",
      date: "Mar 20, 2024",
      time: "2:00 PM",
      type: "Virtual",
      attendees: 32
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        {/* Job Matches */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Jobs</h2>
          <div className="space-y-4">
            {jobListings.map((job) => (
              <div key={job.id} className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm">
                    {job.matches}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                  <span>{job.posted}</span>
                </div>
                <button className="mt-4 w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Career Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Career Resources</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
              <Book className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <span className="font-medium text-gray-700">Learning Paths</span>
            </button>
            <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
              <FileText className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <span className="font-medium text-gray-700">Resume Builder</span>
            </button>
            <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
              <Award className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <span className="font-medium text-gray-700">Certifications</span>
            </button>
            <button className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors text-center">
              <Users className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <span className="font-medium text-gray-700">Mentorship</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
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

        {/* Skills Progress */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Skills Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Leadership</span>
                <span className="text-gray-500">80%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-4/5 bg-pink-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Technical Skills</span>
                <span className="text-gray-500">75%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-3/4 bg-pink-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Communication</span>
                <span className="text-gray-500">90%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div className="h-full w-11/12 bg-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSupport;