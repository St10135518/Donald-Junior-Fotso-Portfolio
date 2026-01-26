import React from 'react';
import { Code2, Database, TrendingUp, Users, Award, Globe } from 'lucide-react';
import { personalInfo, coreStrengths, skills } from '../../data/mockData';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building scalable applications with React, Python, and modern frameworks'
    },
    {
      icon: Database,
      title: 'Data Science & ML',
      description: 'Creating predictive models and data-driven insights using TensorFlow and scikit-learn'
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      description: 'Translating complex business problems into actionable technical solutions'
    },
    {
      icon: Users,
      title: 'Stakeholder Management',
      description: 'Effective communication and collaboration across cross-functional teams'
    }
  ];

  // Split summary into two paragraphs and slightly increase font size
  const summary = personalInfo.summary || "";
  const splitIndex = summary.indexOf("Strong foundation");
  const firstPara = splitIndex !== -1 ? summary.slice(0, splitIndex).trim() : summary;
  const secondPara = splitIndex !== -1 ? summary.slice(splitIndex).trim() : "";

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Passionate About Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Impact</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Combining technical expertise with business acumen to create solutions that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Content */}
          <div>
            <div className="prose prose-lg prose-slate">
              {firstPara && (
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6">{firstPara}</p>
              )}
              {secondPara && (
                <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8">{secondPara}</p>
              )}
            </div>

            {/* Core Strengths */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                Core Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreStrengths.map((strength, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200/50"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 bg-slate-100 rounded-lg"
                  >
                    <span className="font-medium text-slate-700">{lang.name}</span>
                    <span className="mx-2 text-slate-300">|</span>
                    <span className="text-sm text-slate-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
