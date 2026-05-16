import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FiDownload, FiTerminal } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-dark-bg">
      {/* Grid background removed to keep hero clean */}

      {/* Expanded container width to 1400px for more spacing */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Flexbox with justify-between pushes text left and image right */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 xl:gap-24">

          {/* Left Column: Text Content (open layout, fixed proportion) */}
          <div className="relative z-20 w-full lg:w-7/12 flex-shrink-0 px-4 md:px-6 lg:px-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-neon-green font-mono mb-4 text-lg"
              >
                &gt; Hello, world. I am
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 tracking-tight drop-shadow-lg leading-tight whitespace-nowrap"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                Gyanesh Chand.
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl font-bold text-gray-400 mb-6 flex items-center"
              >
                <span className="whitespace-nowrap mr-3">I am a</span>
                <span className="text-neon-blue drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] whitespace-nowrap overflow-visible inline-block"
                      style={{ minWidth: '26ch' }}>
                  <Typewriter
                    words={['Web App Pentester', 'VAPT Intern', 'Cybersecurity Researcher', 'Bug Hunter']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-400 text-base md:text-lg lg:text-xl mb-10 max-w-3xl leading-relaxed"
              >
                I'm a BTech CSE student and a passionate cybersecurity enthusiast from Odisha, India. 
                I specialize in identifying vulnerabilities, thinking like an attacker, and securing digital architectures.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#projects" className="px-6 py-3 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-semibold rounded transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                  <FiTerminal /> View Projects
                </a>
                <a href="/Gyanesh_Chand_Resume.pdf" download className="px-6 py-3 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-semibold rounded transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                  <FiDownload /> Download Resume
                </a>
              </motion.div>

              {/* Social icons moved to Footer */}
          </div>

          {/* Right Column: Portrait Image (fixed proportion, non-shrinking) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full lg:w-5/12 flex-shrink-0 h-auto mx-auto lg:mx-0 mt-8 lg:mt-0 flex justify-center items-center"
          >
            {/* Glow Layers (mix-blend-screen) */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none mix-blend-screen z-0">
              {/* Large blurred cyan circle */}
              <div className="absolute w-[140%] h-[100%] bg-[#00F5FF]/15 rounded-full blur-[100px]"></div>
              {/* Smaller blue glow */}
              <div className="absolute w-[80%] h-[80%] bg-blue-500/20 rounded-full blur-[80px]"></div>
              {/* Subtle radial overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.15)_0%,transparent_60%)] rounded-full blur-[50px]"></div>
            </div>

            {/* Floating Animated Particles */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 30 - 15, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + Math.random() * 4,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-[#00F5FF] rounded-full blur-[2px]"
                  style={{
                    top: `${10 + Math.random() * 80}%`,
                    left: `${10 + Math.random() * 80}%`,
                    boxShadow: '0 0 10px #00F5FF, 0 0 20px #00F5FF'
                  }}
                />
              ))}
            </div>

            {/* The Static Subject Image */}
            <div className="relative w-[360px] md:w-[420px] lg:w-[520px] h-[420px] md:h-[520px] lg:h-[650px] flex justify-center items-center z-20 flex-shrink-0">
              <img
                src="/profile.png"
                alt="Gyanesh Chand - Portrait"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_30px_30px_rgba(0,0,0,0.9)]"
                style={{ filter: 'contrast(1.05) brightness(1.05)' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

