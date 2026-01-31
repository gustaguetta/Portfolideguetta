
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Statistics Strip */}
        <section className="py-10 liquid-glass-blue overflow-hidden relative z-20">
          <div className="flex gap-20 whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i} 
                className="flex items-center gap-12 text-2xl font-black italic tracking-tighter text-white/90"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>GRAPHIC DESIGN</span>
                <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
                <span>WEB ARCHITECTURE</span>
                <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
                <span>LITERARY ART</span>
                <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
                <span>MOTION DESIGN</span>
                <span className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#3b82f6]"></span>
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}</style>
        </section>

        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black">
            <span className="gradient-text">TAR</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 TAR. Built with precision and passion.</p>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
