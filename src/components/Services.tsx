import React from 'react';
import { 
  Wifi, 
  Shield, 
  Settings, 
  Headphones, 
  Cloud, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'High-speed, reliable network infrastructure designed for your business needs.',
      features: ['Fiber Optic Installation', 'Wireless Networks', 'Network Security', 'Performance Monitoring']
    },
    {
      icon: Shield,
      title: 'Security Systems',
      description: 'Comprehensive security solutions to protect your business and data.',
      features: ['Surveillance Systems', 'Access Control', 'Cyber Security', 'Threat Detection']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for modern businesses and remote teams.',
      features: ['Cloud Migration', 'Data Backup', 'Virtual Servers', 'Disaster Recovery']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Mobile communication systems that keep your team connected anywhere.',
      features: ['Mobile Apps', 'SMS Services', 'Push Notifications', 'Cross-Platform Support']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of all your communication and business systems.',
      features: ['API Integration', 'Legacy System Updates', 'Custom Solutions', 'Process Automation']
    },
    {
      icon: Headphones,
      title: 'Support & Maintenance',
      description: '24/7 support and proactive maintenance for all your systems.',
      features: ['24/7 Support', 'Preventive Maintenance', 'System Updates', 'Performance Optimization']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive communication solutions tailored to your business needs, 
            from network infrastructure to advanced security systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="tel:+18337087900"
                className="flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="tel:+18337087900"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-block"
          >
            Request Custom Solution
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;