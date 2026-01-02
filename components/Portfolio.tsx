
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Automated Sales Pipeline',
      client: 'SaaS Pulse',
      tags: ['n8n', 'HubSpot', 'Gemini'],
      description: 'Built an AI agent that monitors Slack for leads, scores them via Gemini, and updates CRM in real-time.',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Global Logistics Dashboard',
      client: 'Orbit Logistics',
      tags: ['React', 'D3.js', 'Next.js'],
      description: 'High-performance real-time tracking interface handling 1M+ monthly shipments with custom visual reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'E-commerce Automation',
      client: 'Thread & Needle',
      tags: ['n8n', 'Shopify', 'Twilio'],
      description: 'Omni-channel customer support automation that reduced human support tickets by 45%.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Recent Projects</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-white">Selected <br/><span className="text-slate-500">Case Studies.</span></h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="max-w-sm text-slate-400 text-sm leading-relaxed"
          >
            A collection of automation and web engineering projects that delivered measurable business value.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-10 border border-white/5 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute top-6 left-6 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-black uppercase tracking-widest text-white rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-2">
                <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">{project.client}</span>
                <h3 className="text-3xl font-black text-white mt-2 mb-4 tracking-tight group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-8 flex items-center space-x-6">
                  <a href="#" className="text-white text-[11px] font-black uppercase tracking-widest border-b border-indigo-500/50 pb-1 hover:border-indigo-500 transition-all">View Details</a>
                  <a href="#" className="text-slate-500 text-[11px] font-black uppercase tracking-widest hover:text-white transition-all">Live Preview</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
