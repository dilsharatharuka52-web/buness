
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Using streamAutomationPlan from lib/gemini instead of the non-existent services/gemini
import { streamAutomationPlan } from '../lib/gemini';

const AutomationChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setAdvice(""); // Clear previous advice
    
    // Wrap the input string in a Message array as expected by the updated streamAutomationPlan signature (line 20 fix)
    await streamAutomationPlan([{ role: 'user', text: input }], (text) => {
      setAdvice(text);
    });
    
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[40px] blur opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative bg-slate-950 rounded-[36px] border border-white/5 overflow-hidden shadow-2xl"
        >
          <div className="md:flex h-[600px]">
            {/* Sidebar info */}
            <div className="md:w-1/3 bg-slate-900/50 p-12 flex flex-col justify-between border-r border-white/5">
              <div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-6 h-6 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-4">Gemini-Powered Consulting</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  A direct interface to my automation logic. Input your workflow bottleneck and get a technical blueprint in seconds.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">System Online</span>
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="md:w-2/3 flex flex-col p-8 md:p-12 relative bg-[#020617]">
               <div className="flex-grow overflow-y-auto mb-8 pr-2 custom-scrollbar">
                  <AnimatePresence mode="wait">
                    {!advice && !loading && (
                      <motion.div 
                        key="intro"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col justify-center items-center text-center space-y-4"
                      >
                         <div className="px-6 py-3 glass rounded-full text-indigo-400 text-xs font-black uppercase tracking-widest">Interactive Playground</div>
                         <h4 className="text-2xl font-black">What shall we optimize?</h4>
                         <p className="text-slate-500 text-sm max-w-xs">Enter any manual task like "Syncing leads from Facebook to Pipedrive".</p>
                      </motion.div>
                    )}

                    {loading && !advice && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                        <div className="h-6 w-3/4 bg-slate-900 rounded-lg animate-pulse"></div>
                        <div className="h-24 w-full bg-slate-900 rounded-lg animate-pulse"></div>
                        <div className="h-12 w-1/2 bg-slate-900 rounded-lg animate-pulse"></div>
                      </motion.div>
                    )}

                    {advice && (
                      <motion.div 
                        key="advice"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-slate-300 font-medium leading-relaxed prose prose-invert max-w-none"
                      >
                        <div className="flex items-center space-x-2 text-indigo-400 font-black text-xs uppercase tracking-widest mb-6 border-b border-indigo-500/20 pb-4">
                          <span>Blueprint Generated</span>
                          <span className="w-1 h-1 rounded-full bg-indigo-500"></span>
                          <span>{new Date().toLocaleTimeString()}</span>
                        </div>
                        <div className="whitespace-pre-wrap">{advice}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>

               <form onSubmit={handleSubmit} className="relative mt-auto">
                  <div className="absolute -inset-0.5 bg-indigo-500/20 rounded-2xl blur"></div>
                  <div className="relative bg-slate-950 rounded-2xl flex items-center overflow-hidden border border-white/10">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Input process for automation..."
                      className="flex-grow bg-transparent px-6 py-5 focus:outline-none text-white font-medium"
                    />
                    <button
                      type="submit"
                      disabled={loading || !input.trim()}
                      className="px-8 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black transition-all disabled:opacity-50 h-full"
                    >
                      {loading ? "..." : "GENERATE"}
                    </button>
                  </div>
               </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AutomationChat;
