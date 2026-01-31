
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 blur-[100px] md:blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 blur-[100px] md:blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center md:text-left">
          <h2 className="text-blue-500 font-bold tracking-[0.2em] mb-4 uppercase text-sm">Portfolio 2026</h2>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Tinotenda <br /> 
            <span className="gradient-text">V Tarirai</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
            <span className="text-white font-semibold">Software Engineering student at MSU</span>. <br className="hidden md:block" />
            A multi-disciplinary creator bridging the gap between <span className="text-white">Design</span>, 
            <span className="text-white"> Code</span>, and <span className="text-white">Storytelling</span>.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-500/25 text-center">
              View Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all border border-slate-700 text-center">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative mt-12 md:mt-0">
          <div className="relative aspect-square max-w-[320px] md:max-w-md mx-auto flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-orange-500 to-purple-600 rounded-[3rem] rotate-6 blur-3xl opacity-10"></div>
             
             {/* Gradient Text Replacement for Image */}
             <div className="relative z-10 flex items-center justify-center w-full h-full select-none">
                <h2 
                  className="text-[10rem] md:text-[16rem] leading-none tracking-tighter transition-transform duration-700 hover:scale-110"
                  style={{ 
                    fontFamily: "'Bebas Neue', sans-serif",
                    background: "linear-gradient(135deg, #3b82f6 0%, #f97316 50%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  TAR
                </h2>
             </div>

             <div className="absolute -bottom-6 -right-6 glass-card p-4 md:p-6 flex items-center gap-3 md:gap-4 animate-bounce duration-[3000ms] z-20">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-green-400"></i>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400">Projects Done</p>
                  <p className="font-bold text-sm md:text-base">10+ Quality Works</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
