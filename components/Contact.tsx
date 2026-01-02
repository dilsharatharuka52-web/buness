
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'automation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent! Check the console for the captured data payload.");
    console.log(formData);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-indigo-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Work With Me</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white mb-10">
              Let's Scale <br/><span className="text-slate-500">Together.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-12">
              Currently accepting new high-impact projects for Q3. If you have a business bottleneck or a vision for a premium web app, reach out below.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Email</h4>
                  <p className="text-slate-500 text-sm">hello@nexusautomate.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Availability</h4>
                  <p className="text-slate-500 text-sm">Mon - Fri: 9am - 6pm (GMT+1)</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 block mb-6">Trusted By Innovative Teams</span>
              <div className="flex flex-wrap gap-10 opacity-30 grayscale items-center">
                 <span className="text-xl font-black text-white tracking-tighter">SaaS.io</span>
                 <span className="text-xl font-black text-white tracking-tighter">FlowStream</span>
                 <span className="text-xl font-black text-white tracking-tighter">CodeLabs</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-indigo-500/10 blur-[80px] rounded-[60px] -z-10"></div>
            <form 
              onSubmit={handleSubmit} 
              className="bg-slate-900/60 backdrop-blur-3xl p-10 md:p-14 rounded-[48px] border border-white/10 shadow-3xl space-y-8"
            >
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition-all font-medium placeholder:text-slate-700"
                  placeholder="Steve Wozniak"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                <input
                  required
                  type="email"
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition-all font-medium placeholder:text-slate-700"
                  placeholder="steve@apple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Project Focus</label>
                <select
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition-all font-bold appearance-none"
                  value={formData.projectType}
                  onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                >
                  <option value="automation">n8n Automation Architecture</option>
                  <option value="web">Next.js Web Application</option>
                  <option value="ai">Custom AI Agent Development</option>
                  <option value="audit">System Efficiency Audit</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Tell me about your challenge</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-slate-950 border border-white/10 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-indigo-500 outline-none text-white transition-all font-medium placeholder:text-slate-700 resize-none"
                  placeholder="Describe your current manual process or app vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-6 bg-white text-slate-950 text-xs font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-2xl shadow-white/5 active:bg-slate-200"
              >
                Launch Inquiry
              </motion.button>
              
              <p className="text-center text-slate-600 text-[10px] uppercase tracking-widest">
                Typical response time: <span className="text-slate-400">Under 24 hours</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
