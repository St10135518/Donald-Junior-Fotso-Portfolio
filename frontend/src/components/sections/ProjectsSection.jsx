import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Layers, Brain, Smartphone, FlaskConical } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '../ui/dialog';
import { projects } from '../../data/mockData';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full Stack', label: 'Full Stack' },
    { id: 'AI/ML', label: 'AI/ML' },
    { id: 'Mobile', label: 'Mobile' },
    { id: 'Research', label: 'Research' }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full Stack':
        return Layers;
      case 'AI/ML':
        return Brain;
      case 'Mobile':
        return Smartphone;
      case 'Research':
        return FlaskConical;
      default:
        return Layers;
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real-world applications showcasing expertise in full-stack development, AI/ML, and business solutions
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div
                    className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-300 overflow-hidden cursor-pointer transition-all duration-300 card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Project Header */}
                    <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-400 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <CategoryIcon className="w-16 h-16 text-white/80" strokeWidth={1.5} />
                      </div>
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>
                      {/* Event Badge */}
                      {project.event && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-amber-500/90 text-white border-0">
                            {project.event}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md text-xs font-medium">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>

                      {/* View More */}
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View Details
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Project Modal */}
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge className="mb-2 bg-blue-100 text-blue-700 border-0">
                          {project.category}
                        </Badge>
                        <DialogTitle className="text-2xl font-bold text-slate-800">
                          {project.title}
                        </DialogTitle>
                      </div>
                    </div>
                    <DialogDescription className="text-slate-600 text-base mt-2">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-slate-600">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-3">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-4 border-t border-slate-200">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                          <Github size={18} className="mr-2" />
                          View on GitHub
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/St10135518"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 rounded-full px-8"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
              <ExternalLink size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
