import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-8 text-center border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/gyanesh-chand" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-md text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5 transition-all text-xl">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/gyanesh-chand-0a8923307/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5 transition-all text-xl">
            <FiLinkedin />
          </a>
          <a href="mailto:gyaneshchand57@gmail.com" aria-label="Email" className="p-2 rounded-md text-gray-300 hover:text-neon-blue hover:bg-neon-blue/5 transition-all text-xl">
            <FiMail />
          </a>
        </div>
        <div className="h-[1px] bg-neon-blue/5 mb-4 mx-auto max-w-md rounded" />
        <p className="text-gray-500 font-mono text-sm">
          Designed & Built by <span className="text-neon-green">Gyanesh Chand</span>
        </p>
        <p className="text-gray-600 font-mono text-xs mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
