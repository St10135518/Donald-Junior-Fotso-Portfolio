import React, { useState } from 'react';
import { Code2, Database, Briefcase, Wrench } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { skills } from '../../data/mockData';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const skillCategories = [
    {
      id: 'technical',
      label: 'Development',
      icon: Code2,
      skills: skills.technical,
      description: 'Full-stack development technologies'
    },
    {
      id: 'dataScience',
      label: 'Data Science',
      icon: Database,
      skills: skills.dataScience,
      description: 'Machine learning & data analytics'
    },
    {
      id: 'business',
      label: 'Business',
      icon: Briefcase,
      skills: skills.business,
      description: 'Analysis & project management'
    },
    {
      id: 'tools',
      label: 'Tools',
      icon: Wrench,
      skills: skills.tools.map(tool => ({ name: tool, category: 'Tool' })),
      description: 'Development & design tools'
    }
  ];

  const getSkillsByCategory = (skillList) => {
    const grouped = {};
    skillList.forEach(skill => {
      const cat = skill.category || 'General';
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push(skill.name);
    });
    return grouped;
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Proficiency</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning development, data science, and business analysis
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="technical" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200"
              >
                <category.icon size={18} />
                <span className="hidden sm:inline">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {category.label} Skills
                  </h3>
                  <p className="text-slate-600">{category.description}</p>
                </div>

                {category.id === 'tools' ? (
                  <div className="flex flex-wrap justify-center gap-3">
                    {skills.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="px-5 py-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-slate-700 hover:text-blue-700 font-medium transition-all duration-200 cursor-default"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-8">
                    {Object.entries(getSkillsByCategory(category.skills)).map(([cat, skillList]) => (
                      <div key={cat}>
                        <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                          {cat}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {skillList.map((skill, index) => (
                            <div
                              key={index}
                              className="group relative px-5 py-3 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-blue-100 border border-slate-200 hover:border-blue-300 rounded-xl text-slate-700 hover:text-blue-700 font-medium transition-all duration-200 cursor-default"
                            >
                              <span className="relative z-10">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Skills Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: 'Programming Languages', count: '4+' },
            { label: 'ML/AI Frameworks', count: '5+' },
            { label: 'Visualization Tools', count: '4+' },
            { label: 'Business Tools', count: '8+' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.count}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
