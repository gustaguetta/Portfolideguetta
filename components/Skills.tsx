
import React, { useEffect, useState } from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const el = document.getElementById('skills');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tighter">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Mastery across various domains, from digital aesthetics to functional architectures.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <div key={index} className="glass-card p-8 hover:bg-white/5 transition-all group">
              <div className="flex justify-between items-end mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`fa-brands ${skill.icon} fa-solid text-2xl`} style={{ color: skill.color }}></i>
                  </div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                </div>
                <span className="text-2xl font-black opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: skill.color }}>
                  {skill.percentage}%
                </span>
              </div>
              
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full progress-bar shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                  style={{ 
                    width: isVisible ? `${skill.percentage}%` : '0%',
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
