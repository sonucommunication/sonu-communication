import React from 'react';
import { Target, Heart, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connecting Businesses Through
              <span className="text-teal-600"> Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over a decade, Sonu Communication has been at the forefront of communication technology, 
              helping businesses transform their operations through cutting-edge solutions. We believe that 
              effective communication is the foundation of every successful enterprise.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts combines technical expertise with deep industry knowledge to deliver 
              solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Mission-Driven</h4>
                  <p className="text-sm text-gray-600">Focused on delivering measurable results for our clients</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Client-Centric</h4>
                  <p className="text-sm text-gray-600">Your success is our success, always</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Excellence</h4>
                  <p className="text-sm text-gray-600">Commitment to quality in everything we do</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovation</h4>
                  <p className="text-sm text-gray-600">Always pushing boundaries and exploring new possibilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Team meeting"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">10+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;