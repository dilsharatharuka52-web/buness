
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AnimatedCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const cardTop = rect.top + scrolled;
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - cardTop + rect.height / 2) / windowHeight));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-20" style={{ perspective: '1000px' }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ 
          duration: 1,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative w-full"
      >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-[48px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl shadow-2xl"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50" />
        
        {/* Shine Effect */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 pointer-events-none"
        />
        
        {/* Content */}
        <div className="relative p-12 md:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text */}
            <div style={{ transform: "translateZ(50px)" }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="inline-block px-4 py-2 mb-6 rounded-full bg-indigo-500/20 border border-indigo-500/30"
              >
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Automation Power</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                AI-Powered <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Workflow Engine
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-slate-300 text-lg mb-8 leading-relaxed"
              >
                Transform your business processes with intelligent automation. 
                Connect apps, automate workflows, and scale effortlessly.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                {['n8n', 'Zapier', 'Webhooks', 'AI'].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            
            {/* Right Side - Visual Element */}
            <motion.div
              style={{ transform: "translateZ(50px)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10">
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                {/* Floating Icons */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 left-10 w-16 h-16 rounded-2xl bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-10 right-10 w-16 h-16 rounded-2xl bg-purple-500/30 backdrop-blur-md border border-purple-400/30 flex items-center justify-center"
                >
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </motion.div>
                
                {/* Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-400/40 to-purple-400/40 blur-3xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Border Glow */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.6 : 0.3,
          }}
          className="absolute inset-0 rounded-[48px] border border-white/20 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
          }}
        />
      </div>
      </motion.div>
    </div>
  );
};

export interface AIChatbotFaceProps {
  initialX?: number;
  initialY?: number;
  delay?: number;
  size?: number; // Size in pixels
}

export const AIChatbotFace = ({ initialX, initialY, delay = 0, size = 50 }: AIChatbotFaceProps) => {
  const faceRef = useRef<HTMLDivElement>(null);
  const [isVisible] = useState(true);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 }); // Smooth cursor following
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!faceRef.current) return;
      
      const rect = faceRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from cursor to bot center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Bot follows cursor - smooth spring animation will handle the movement
      x.set(deltaX * 0.15); // Responsive following
      y.set(deltaY * 0.15); // Responsive following
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);
  
  // Calculate proportional sizes based on bot size
  const eyeSize = size * 0.12; // 12% of bot size (increased from 5%)
  const pupilSize = size * 0.08; // 8% of bot size (increased from 3%)
  const mouthWidth = size * 0.15; // 15% of bot size (increased from 6%)
  const mouthHeight = size * 0.08; // 8% of bot size (increased from 3%)
  const indicatorSize = size * 0.04; // 4% of bot size
  const eyeGap = size * 0.04; // 4% gap between eyes (slightly increased)
  
  // Eye movement based on cursor - adjusted for size
  const eyeX = useTransform(mouseXSpring, [-50, 50], [-size * 0.04, size * 0.04]);
  const eyeY = useTransform(mouseYSpring, [-50, 50], [-size * 0.04, size * 0.04]);
  
  return (
    <motion.div
      ref={faceRef}
      className="relative pointer-events-none"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 100,
      }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      style={{
        x: mouseXSpring,
        y: mouseYSpring,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* 3D Glass Effect Container */}

      {/* Speech Bubble (Optional - appears on hover) */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute bottom-full right-0 mb-2 px-2 py-1 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 font-semibold text-white whitespace-nowrap"
        style={{ fontSize: `${size * 0.2}px` }}
      >
        👋 AI Assistant
        <div 
          className="absolute bottom-0 right-2 translate-y-1/2 rotate-45 bg-white/10 border-r border-b border-white/20"
          style={{ width: `${size * 0.03}px`, height: `${size * 0.03}px` }}
        />
      </motion.div>
    </motion.div>
  );
};

export const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_farthest-side_at_var(--x,50%)_var(--y,50%),rgba(99,102,241,0.12)_0%,transparent_100%)] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400"
        >
          Redefining Business Efficiency
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-[110px] font-black tracking-tight mb-8 leading-[0.85] text-white"
        >
          Scale <span className="text-slate-500">Smart.</span> <br />
          Partner with <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">Zoy.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium"
        >
          Zoy builds high-performance AI chatbots, bespoke web solutions, and automated operations for modern businesses.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#consultant" className="px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-white/5">
            Test Automation AI
          </a>
          <a href="#portfolio" className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-white font-black rounded-2xl hover:bg-white/10 transition-all">
            Browse Portoflio
          </a>
        </motion.div>
      </div>

      {/* Apple-style Animated Card */}
      <AnimatedCard />

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 md:left-40 opacity-20 pointer-events-none"
      >
        <div className="w-24 h-24 border border-white/20 rounded-3xl rotate-12"></div>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-10 md:right-40 opacity-20 pointer-events-none"
      >
        <div className="w-16 h-16 border border-indigo-500/40 rounded-full"></div>
      </motion.div>
    </section>
  );
};
