
import React from 'react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6">Expertise.</h2>
        <p className="text-slate-400 max-w-xl text-lg">
          We don't just build features. We build scalable systems that generate ROI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
        {/* Large Feature Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-8 md:row-span-2 glass rounded-[32px] p-10 flex flex-col justify-between group bento-card overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
             <svg className="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
             </svg>
          </div>
          <div>
            <span className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Premium Development</span>
            <h3 className="text-3xl md:text-5xl font-black mt-4 mb-6 leading-tight">Modern Web <br/>Architecture</h3>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Performance-first web applications built with the latest stack. Optimized for speed, SEO, and conversion.
            </p>
          </div>
          <div className="flex gap-3">
             {['Next.js', 'React', 'Tailwind', 'TS'].map(tag => (
               <span key={tag} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold">{tag}</span>
             ))}
          </div>
        </motion.div>

        {/* Square Card 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-4 md:row-span-2 glass rounded-[32px] p-8 flex flex-col justify-between bento-card bg-gradient-to-br from-indigo-500/10 to-transparent"
        >
          <div>
             <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
             <h3 className="text-2xl font-black mb-4">n8n Workflow Mastery</h3>
             <p className="text-slate-400 leading-relaxed">
               Connecting your entire stack into a single, automated source of truth.
             </p>
          </div>
          <ul className="space-y-3 text-sm font-bold text-slate-300">
             <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span>API Integrations</li>
             <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span>Webhook Design</li>
             <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-3"></span>Data Extraction</li>
          </ul>
        </motion.div>

        {/* Wide Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-12 md:row-span-1 glass rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between bento-card"
        >
          <div className="mb-6 md:mb-0">
             <h3 className="text-2xl font-black mb-2">AI Agent Deployment</h3>
             <p className="text-slate-400">Transforming Gemini 3 into your 24/7 business assistant.</p>
          </div>
          <div className="flex -space-x-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?u=${i}`} alt="AI User" />
               </div>
             ))}
             <div className="w-12 h-12 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-xs font-bold">+10k</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
