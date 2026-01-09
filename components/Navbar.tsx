
import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Consultant', href: '#consultant' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
    >
      <div className={`flex items-center gap-2 p-2 rounded-2xl transition-all duration-500 pointer-events-auto border ${
        scrolled 
          ? 'bg-slate-950/70 border-white/10 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center px-4 mr-2">
          <span className="text-[30px] font-black tracking-tighter text-white">ZOY<span className="text-indigo-500">.</span></span>
        </div>
        
        <div className="hidden md:flex items-center bg-white/5 rounded-xl border border-white/5 p-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all rounded-lg hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-2 px-6 py-2.5 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
        >
          Work with me
        </a>
      </div>
    </motion.nav>
  );
};
