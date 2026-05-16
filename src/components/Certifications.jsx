import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiShield } from 'react-icons/fi';

const Certifications = () => {
  const certs = [
    {
      title: "Certified Cybersecurity Foundation Course (CCSFC)",
      status: "Completed",
      icon: <FiAward />
    },
    {
      title: "TryHackMe Learning Experience",
      status: "Completed multiple rooms",
      icon: <FiStar />
    },
    {
      title: "Defronix Certified Junior Security Practitioner (DCJSP)",
      status: "Preparing",
      icon: <FiAward />,
      highlight: true
    }
  ];

  const achievements = [
    "Reported a Critical P1 API Authorization vulnerability (BOLA/IDOR) on Bugcrowd.",
    "Reported XSS and HTML Injection vulnerabilities on OpenBugBounty.",
    "Published technical cybersecurity write-ups on Medium.",
    "Conducted seminars on SQL Injection and XSS security risks."
  ];

  return (
    <section id="achievements" className="py-24 relative scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications & Achievements</h2>
            <div className="h-[1px] bg-gray-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-6 flex items-center gap-2">
                <FiAward className="text-neon-blue" /> Licenses & Certifications
              </h3>
              <div className="space-y-4">
                {certs.map((cert, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass p-4 rounded-lg flex items-center gap-4 border-l-2 ${cert.highlight ? 'border-l-neon-green bg-neon-green/5' : 'border-l-neon-blue'}`}
                  >
                    <div className={`text-2xl ${cert.highlight ? 'text-neon-green' : 'text-neon-blue'}`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{cert.title}</h4>
                      <p className="text-sm font-mono text-gray-400">{cert.status}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements List */}
            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-6 flex items-center gap-2">
                <FiStar className="text-neon-green" /> Key Milestones
              </h3>
              <div className="glass p-6 rounded-lg h-full">
                <ul className="space-y-4">
                  {achievements.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-3 text-gray-300 hover:text-neon-blue transition-colors"
                    >
                      <span className="text-neon-green mt-1"><FiShield /></span>
                      <span className="flex-1">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
