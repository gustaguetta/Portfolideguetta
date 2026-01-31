
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'liquid-glass py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-2 group">
            <span className="w-10 h-10 logo-gradient rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">T</span>
            <span className="gradient-text">TAR</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-widest text-slate-400">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors relative group/link">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white hover:scale-105 active:scale-95">Let's Talk</a>
          </div>

          <button 
            className="md:hidden text-white w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20"
          >
            Let's Talk
          </a>
          
          <div className="flex gap-6 mt-8">
            {['twitter', 'github', 'linkedin'].map(platform => (
              <a key={platform} href="#" className="text-2xl text-slate-400 hover:text-white transition-colors">
                <i className={`fa-brands fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
