import React from 'react';
import { Building, Factory, ShoppingCart, GraduationCap, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Building,
      title: 'Corporate Communications',
      description: 'Comprehensive communication infrastructure for large enterprises and corporations.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['VoIP Systems', 'Video Conferencing', 'Unified Communications', 'Enterprise Wi-Fi'],
      results: '40% increase in productivity'
    },
    {
      icon: Factory,
      title: 'Manufacturing Solutions',
      description: 'Industrial-grade communication systems for manufacturing and production facilities.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Industrial Networks', 'IoT Integration', 'Real-time Monitoring', 'Safety Systems'],
      results: '60% reduction in downtime'
    },
    {
      icon: ShoppingCart,
      title: 'Retail Technology',
      description: 'Modern POS systems and customer communication solutions for retail businesses.',
      image: 'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['POS Systems', 'Digital Signage', 'Customer Analytics', 'Inventory Management'],
      results: '25% boost in sales'
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Advanced learning management and communication systems for schools and universities.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['Learning Management', 'Campus-wide Wi-Fi', 'Distance Learning', 'Student Portals'],
      results: '50% improvement in engagement'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry <span className="text-teal-600">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries transform their 
            communication infrastructure and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-teal-600">{solution.results}</span>
                  </div>
                  <a 
                    href="tel:+18337087900"
                    className="flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200 group"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="tel:+18337087900"
            className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 inline-block"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;