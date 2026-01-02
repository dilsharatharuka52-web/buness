
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <span className="text-2xl font-black tracking-tighter text-white">NEXUS<span className="text-indigo-500">.</span></span>
            <p className="text-slate-500 text-sm mt-6 max-w-sm leading-relaxed">
              Engineering high-performance automation systems and digital experiences for the next generation of business.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#expertise" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Nexus Automate. Built with Passion & n8n.
          </p>
          <div className="flex space-x-8 text-slate-600 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
