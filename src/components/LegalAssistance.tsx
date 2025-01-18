import React from 'react';
import { Scale, FileText, Phone, MessageSquare, Calendar, Users } from 'lucide-react';

const LegalAssistance: React.FC = () => {
  const legalServices = [
    {
      id: 1,
      title: "Legal Consultation",
      description: "Free 30-minute consultation with experienced attorneys",
      icon: Scale,
      available: true
    },
    {
      id: 2,
      title: "Document Review",
      description: "Professional review of legal documents and contracts",
      icon: FileText,
      available: true
    },
    {
      id: 3,
      title: "Emergency Hotline",
      description: "24/7 legal emergency support hotline",
      icon: Phone,
      available: true
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      type: "Legal Consultation",
      date: "Mar 15, 2024",
      time: "2:00 PM",
      lawyer: "Jennifer Martinez",
      status: "Confirmed"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
      {/* Main Services */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Legal Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalServices.map((service) => (
              <div key={service.id} className="p-6 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all">
                <service.icon className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Legal Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Know Your Rights</h3>
              <p className="text-sm text-gray-600">Essential legal rights every woman should know</p>
            </button>
            <button className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Document Templates</h3>
              <p className="text-sm text-gray-600">Common legal document templates</p>
            </button>
            <button className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Legal FAQ</h3>
              <p className="text-sm text-gray-600">Answers to common legal questions</p>
            </button>
            <button className="p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition-colors text-left">
              <h3 className="font-semibold text-gray-800 mb-2">Support Directory</h3>
              <p className="text-sm text-gray-600">Directory of legal support services</p>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 bg-pink-50 rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-2">{appointment.type}</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {appointment.date} at {appointment.time}
                  </p>
                  <p className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {appointment.lawyer}
                  </p>
                  <p className="text-pink-500 font-medium">{appointment.status}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors">
            Schedule Appointment
          </button>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors flex items-center">
              <Phone className="w-5 h-5 text-pink-500 mr-3" />
              <span className="font-medium text-gray-700">Emergency Hotline</span>
            </button>
            <button className="w-full p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors flex items-center">
              <MessageSquare className="w-5 h-5 text-pink-500 mr-3" />
              <span className="font-medium text-gray-700">Chat with Lawyer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAssistance;