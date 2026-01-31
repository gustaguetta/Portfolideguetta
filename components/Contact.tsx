
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-20 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black mb-8 tracking-tighter">Let's craft something <br /><span className="text-blue-500">extraordinary.</span></h2>
              <p className="text-slate-400 mb-12 text-lg">Whether you're looking for a developer, a designer, or a writer, let's connect and discuss your vision.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <i className="fa-solid fa-envelope text-blue-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Me</p>
                    <p className="font-bold text-lg">tinvictar@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <i className="fa-solid fa-location-dot text-blue-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Location</p>
                    <p className="font-bold text-lg">Zimbabwe / Global</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {['twitter', 'github', 'linkedin', 'instagram'].map(platform => (
                  <a key={platform} href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1">
                    <i className={`fa-brands fa-${platform} text-xl text-white/50 hover:text-white transition-colors`}></i>
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input type="text" placeholder="Ngwiro Lager" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <input type="email" placeholder="youngmetro.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all appearance-none">
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>Animation</option>
                  <option>Book Writing Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea rows={4} placeholder="Your project details..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]">
                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
