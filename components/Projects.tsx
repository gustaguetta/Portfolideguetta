
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Web', 'Book', 'App'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-black tracking-tighter mb-4">Featured Works</h2>
            <p className="text-slate-400 max-w-lg">A curated selection of projects reflecting my passion for quality and innovation.</p>
          </div>
          
          <div className="flex gap-2 p-1.5 bg-slate-800/50 rounded-2xl backdrop-blur-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project: Project) => (
            <div key={project.id} className="group relative">
              <a 
                href={project.link || "#"} 
                target={project.link ? "_blank" : "_self"}
                rel={project.link ? "noopener noreferrer" : ""}
                className={`block relative aspect-[4/3] overflow-hidden rounded-3xl mb-6 ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <i className="fa-solid fa-link text-sm"></i>
                  </div>
                )}
              </a>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest block">{project.category}</span>
                  {project.icon && (
                    <i className={`fa-solid ${project.icon} text-slate-500`}></i>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                  <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel={project.link ? "noopener noreferrer" : ""}>
                    {project.title}
                  </a>
                  {project.link && (
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  )}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
