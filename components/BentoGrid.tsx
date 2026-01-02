
import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ title, description, icon, className, delay = 0, tags }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`relative group bg-slate-900/40 border border-white/5 rounded-[32px] overflow-hidden p-8 hover:border-indigo-500/40 transition-all duration-500 shadow-2xl ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-500">
          {icon}
        </div>
        <h3 className="text-2xl font-black mb-3 text-white tracking-tight leading-tight">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
        
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-slate-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="mt-8 flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-indigo-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500">
        Discover Capabilities 
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </motion.div>
);

export const BentoGrid = () => {
  return (
    <section id="expertise" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Expertise Hub</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">
            Architecting <br/><span className="text-slate-500">Scalable Systems.</span>
          </h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-400 max-w-sm text-lg leading-relaxed mb-2"
        >
          Specializing in the intersection of high-end frontend engineering and complex backend automation.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[340px]">
        <BentoCard 
          className="md:col-span-8 md:row-span-2"
          title="Full-Stack Web Engineering"
          description="Developing blazing-fast, SEO-optimized React & Next.js applications. From pixel-perfect UI with Tailwind to robust PostgreSQL architectures."
          tags={['React', 'Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL']}
          icon={<svg className="w-7 h-7 text-indigo-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeWidth={2.5} /></svg>}
        />
        <BentoCard 
          className="md:col-span-4 md:row-span-1"
          delay={0.1}
          title="n8n Mastery"
          description="Building custom nodes and complex multi-step workflows to eliminate manual data entry."
          tags={['n8n', 'Zapier', 'APIs']}
          icon={<svg className="w-7 h-7 text-purple-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={2.5} /></svg>}
        />
        <BentoCard 
          className="md:col-span-4 md:row-span-2"
          delay={0.2}
          title="AI Agent Logic"
          description="Integrating Gemini & OpenAI into business processes for automated lead scoring and smart replies."
          tags={['Gemini', 'LLMs', 'RAG']}
          icon={<svg className="w-7 h-7 text-pink-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1" strokeWidth={2.5} /></svg>}
        />
        <BentoCard 
          className="md:col-span-4 md:row-span-1"
          delay={0.3}
          title="Cloud Infra"
          description="Reliable deployment and monitoring."
          tags={['Docker', 'AWS', 'Vercel']}
          icon={<svg className="w-7 h-7 text-green-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" strokeWidth={2.5} /></svg>}
        />
      </div>
    </section>
  );
};
