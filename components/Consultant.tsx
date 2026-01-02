
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { streamAutomationPlan, Message } from '../lib/gemini';

export const Consultant = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStream, setCurrentStream] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, currentStream]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    const userMessage: Message = { role: 'user', text: input };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    setCurrentStream('');
    
    let finalAiText = "";
    await streamAutomationPlan(updatedMessages, (chunk) => {
      setCurrentStream(chunk);
      finalAiText = chunk;
    });

    setMessages(prev => [...prev, { role: 'model', text: finalAiText }]);
    setCurrentStream('');
    setLoading(false);
  };

  return (
    <section id="consultant" className="py-20">
      <div className="bg-[#0a0f1e] border border-white/5 rounded-[48px] overflow-hidden shadow-3xl flex flex-col min-h-[700px] max-h-[800px]">
        
        {/* Header */}
        <div className="bg-slate-950/80 px-10 py-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Zoy Multi-Lang Support Online</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400/60">English / සිංහල</span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-grow h-full overflow-hidden">
          {/* Sidebar */}
          <div className="hidden md:flex md:w-1/3 p-12 flex-col justify-center border-r border-white/5 bg-slate-900/10 shrink-0">
            <h3 className="text-4xl font-black text-white mb-6 tracking-tighter">Growth <br/><span className="text-slate-500">Chat.</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium mb-10">
              Speak with Zoy's AI partner about your business goals. Choose your language and let's build something great together.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2">Capabilities</p>
                <p className="text-xs text-slate-500 font-medium">Chatbots, Web Dev, DevOps, and Full Business Automation.</p>
              </div>
            </div>
          </div>

          {/* Chat Container */}
          <div className="flex-grow flex flex-col bg-slate-950/20 relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-10 space-y-8 custom-scrollbar"
            >
              <AnimatePresence mode="popLayout">
                {messages.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
                  >
                    <div className="relative w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-slate-900">
                      <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth={2} /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-tight mb-2">ආයුබෝවන්! / Welcome!</h4>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">English or සිංහල? Tell us what's on your mind.</p>
                    </div>
                  </motion.div>
                )}

                {messages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] px-6 py-4 rounded-[24px] ${
                      msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'
                    }`}>
                      <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}

                {currentStream && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="max-w-[85%] px-6 py-4 bg-white/5 border border-white/10 text-slate-200 rounded-[24px] rounded-tl-none">
                      <p className="text-sm font-medium leading-relaxed whitespace-pre-wrap">{currentStream}</p>
                    </div>
                  </motion.div>
                )}

                {loading && !currentStream && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input area */}
            <div className="p-8 bg-slate-950/40 border-t border-white/5">
              <form onSubmit={handleSubmit} className="relative group max-w-4xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[24px] blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <div className="relative flex gap-3 p-2 bg-slate-900 border border-white/10 rounded-[24px]">
                  <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Zoy something in English or සිංහල..."
                    className="flex-grow bg-transparent px-8 py-4 focus:outline-none text-white font-medium placeholder:text-slate-700"
                    disabled={loading}
                  />
                  <button 
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="px-8 py-4 bg-white text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-[18px] hover:bg-indigo-50 hover:scale-105 disabled:opacity-30 transition-all active:scale-95 shrink-0"
                  >
                    {loading ? "ZOY..." : "SEND"}
                  </button>
                </div>
              </form>
              <p className="text-center mt-4 text-[9px] font-black uppercase tracking-[0.3em] text-slate-600">Continuous Business Chat Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
