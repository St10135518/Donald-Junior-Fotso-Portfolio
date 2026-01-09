import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';
import { Badge } from '../ui/badge';
import { education, hackathons } from '../../data/mockData';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Education & Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Academic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Journey</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A strong foundation in informatics, business analytics, and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="relative flex gap-6 group"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-start pt-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${
                        edu.status === 'current'
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                          : 'bg-white border-2 border-blue-300 text-blue-600 group-hover:border-blue-600'
                      }`}>
                        <GraduationCap size={20} />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          {edu.status === 'current' && (
                            <Badge className="mb-2 bg-green-100 text-green-700 border-0">
                              Currently Pursuing
                            </Badge>
                          )}
                          <h4 className="text-lg font-semibold text-slate-800">
                            {edu.degree}
                          </h4>
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar size={14} className="mr-1.5" />
                          {edu.period}
                        </div>
                      </div>

                      <div className="flex items-center text-blue-600 font-medium mb-2">
                        <MapPin size={16} className="mr-2" />
                        {edu.institution}
                      </div>

                      {edu.description && (
                        <p className="text-sm text-slate-600 mt-2">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hackathons & Events */}
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
              <Trophy className="w-6 h-6 mr-3 text-amber-500" />
              Hackathons & Events
            </h3>

            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <div
                  key={hackathon.id}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-100 group-hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                      <Award className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-slate-800 text-sm">
                          {hackathon.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">
                          {hackathon.year}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600">
                        {hackathon.project}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl text-white">
              <h4 className="font-semibold mb-4">Quick Stats</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Hackathons Participated</span>
                  <span className="font-bold text-lg">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Projects Completed</span>
                  <span className="font-bold text-lg">6+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Years of Study</span>
                  <span className="font-bold text-lg">5+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
