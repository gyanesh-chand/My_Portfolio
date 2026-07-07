import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiShield, FiBriefcase, FiX, FiZoomIn, FiZoomOut, FiDownload, FiExternalLink, FiMaximize2 } from 'react-icons/fi';

import dcjspImg from '../assets/certificates/dcjsp.png';
import cyberdozoImg from '../assets/certificates/cyberdozo.png';
import hackwithindiaImg from '../assets/certificates/hackwithindia.png';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const modalRef = useRef(null);

  const certs = [
    {
      title: "Defronix Certified Junior Security Professional (DCJSP)",
      organization: "Defronix Cyber Security",
      date: "August 2024",
      description: "Completed practical cybersecurity training covering networking, Linux, web security, penetration testing fundamentals, and ethical hacking.",
      buttonText: "View Certificate",
      icon: <FiAward />,
      image: dcjspImg
    },
    {
      title: "Web Application Penetration Testing Internship",
      organization: "CyberDojo – The School of Cyberdefense",
      date: "June 2025 – August 2025",
      description: "Successfully completed a Web & API Penetration Testing internship involving vulnerability assessments, OWASP Top 10 practice, API security testing, technical reporting, and responsible disclosure.",
      buttonText: "View Certificate",
      icon: <FiBriefcase />,
      image: cyberdozoImg
    },
    {
      title: "Vulnerability Disclosure Recognition",
      organization: "HackWithIndia",
      date: "2026",
      description: "Recognized for successfully reporting a valid security vulnerability during India's largest live hacking event under the Vulnerability Disclosure Program.",
      buttonText: "View Recognition",
      icon: <FiShield />,
      image: hackwithindiaImg
    }
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const closeModal = () => {
    setSelectedCert(null);
    setZoomScale(1);
  };

  const handleZoomIn = () => {
    setZoomScale(prev => Math.min(3, prev + 0.25));
  };

  const handleZoomOut = () => {
    setZoomScale(prev => Math.max(1, prev - 0.25));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  const handleImageClick = () => {
    setZoomScale(prev => (prev === 1 ? 1.75 : 1));
  };

  return (
    <section id="certifications" className="py-24 relative scroll-mt-24 md:scroll-mt-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Certifications & Recognition
            </h2>
            <div className="h-[1px] bg-gray-800 flex-grow max-w-xs"></div>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed">
            Professional certifications, internship credentials, and security recognition earned through hands-on learning and responsible vulnerability disclosure.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass p-6 rounded-xl flex flex-col h-full border border-gray-900 hover:border-neon-blue hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card top icon & details */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/5 border border-neon-blue/20 flex items-center justify-center text-xl text-neon-blue group-hover:bg-neon-blue/10 group-hover:border-neon-blue/50 group-hover:scale-110 transition-all duration-300">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-mono text-neon-green font-semibold">
                    {cert.organization}
                  </h4>
                  <p className="text-xs font-mono text-gray-500 mt-0.5">
                    {cert.date}
                  </p>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300 leading-snug">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {cert.description}
              </p>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-auto w-full py-2.5 px-4 rounded-lg bg-transparent border border-neon-blue/40 text-neon-blue font-mono text-sm font-medium hover:bg-neon-blue hover:text-black hover:border-neon-blue active:bg-neon-blue/80 transition-all duration-300 outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-[#050505] flex items-center justify-center gap-2"
                aria-label={`Open certificate preview for ${cert.title}`}
              >
                <FiMaximize2 className="text-xs" />
                {cert.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closeModal}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full bg-[#080c14] border border-gray-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-900 bg-[#090f1a]">
                <div>
                  <h3 id="modal-title" className="text-lg font-bold text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs font-mono text-neon-blue mt-0.5">
                    {selectedCert.organization} • {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 active:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  aria-label="Close modal"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Image Preview Container */}
              <div className="relative flex-grow flex items-center justify-center bg-[#04060b] overflow-auto max-h-[70vh] min-h-[300px] p-6 scrollbar-thin">
                <div 
                  className="transition-transform duration-200 ease-out flex items-center justify-center"
                  style={{ 
                    transform: `scale(${zoomScale})`, 
                    cursor: zoomScale === 1 ? 'zoom-in' : 'zoom-out' 
                  }}
                  onClick={handleImageClick}
                >
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate Issued by ${selectedCert.organization}`}
                    className="max-w-full max-h-[60vh] object-contain rounded shadow-lg pointer-events-none select-none"
                  />
                </div>
              </div>

              {/* Footer Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-t border-gray-900 bg-[#090f1a]">
                
                {/* Zoom Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomScale <= 1}
                    className="p-2 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 active:bg-gray-800 disabled:opacity-40 disabled:hover:text-gray-400 disabled:hover:border-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    aria-label="Zoom Out"
                    title="Zoom Out"
                  >
                    <FiZoomOut className="text-lg" />
                  </button>
                  <span className="text-xs font-mono text-gray-400 min-w-[50px] text-center">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomScale >= 3}
                    className="p-2 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 active:bg-gray-800 disabled:opacity-40 disabled:hover:text-gray-400 disabled:hover:border-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    aria-label="Zoom In"
                    title="Zoom In"
                  >
                    <FiZoomIn className="text-lg" />
                  </button>
                  {zoomScale !== 1 && (
                    <button
                      onClick={handleResetZoom}
                      className="px-2.5 py-1 text-xs font-mono rounded border border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 active:bg-neon-blue/20 transition-all duration-200 focus:outline-none"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* External / Download Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono font-medium rounded border border-gray-800 bg-gray-900 text-gray-300 hover:text-white hover:border-gray-700 hover:bg-gray-800/50 active:bg-gray-800 transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-neon-blue"
                  >
                    <FiExternalLink />
                    Open in Tab
                  </a>
                  <a
                    href={selectedCert.image}
                    download={`${selectedCert.title.toLowerCase().replace(/\s+/g, '_')}.png`}
                    className="px-4 py-2 text-xs font-mono font-medium rounded bg-neon-blue text-black hover:bg-neon-blue/90 active:bg-neon-blue/80 transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-offset-2 focus:ring-offset-[#090f1a]"
                  >
                    <FiDownload />
                    Download
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
