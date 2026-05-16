import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Achievements', href: '#achievements' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollPct(Math.min(100, Math.max(0, pct)));
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Horizontal Scroll Progress (fixed at very top) */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
        <motion.div
          className="h-full bg-neon-blue/80"
          style={{ transformOrigin: '0% 50%', boxShadow: '0 0 12px rgba(6,182,212,0.6)' }}
          animate={{ width: `${scrollPct}%` }}
          transition={{ ease: 'easeOut', duration: 0.18 }}
        />
      </div>

      <nav className={`fixed w-full top-[3px] z-50 transition-all duration-300 border-0 shadow-none outline-none ${scrolled ? 'bg-[#050505]/95 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="font-mono text-lg font-semibold tracking-tight text-white flex items-center gap-2">
                <span className="text-neon-blue text-xl font-bold">GC</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 border border-neon-green text-neon-green rounded hover:bg-neon-green/10 transition-colors text-sm font-mono"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-neon-blue focus:outline-none">
                {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-8 space-y-6"
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-neon-blue transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Vertical scroll indicator removed per request; kept only horizontal progress bar */}
    </>
  );
};

export default Navbar;
