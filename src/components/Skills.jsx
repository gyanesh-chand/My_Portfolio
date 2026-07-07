import React from 'react';
import { motion } from 'framer-motion';
import { FiTerminal, FiTool, FiCode } from 'react-icons/fi';

const SkillCategory = ({ title, icon, skills, delay, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
      <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue text-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm border border-gray-700 hover:border-neon-green hover:text-neon-green cursor-default transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Cybersecurity",
      icon: <FiTerminal />,
      skills: [
        "Web Application Penetration Testing",
        "API Security Testing",
        "Vulnerability Assessment (VAPT)",
        "OWASP Top 10",
        "Reconnaissance",
        "Scanning & Enumeration",
        "Security Monitoring",
        "Network Security"
      ]
    },
    {
      title: "Tools",
      icon: <FiTool />,
      skills: [
        "Burp Suite",
        "Nmap",
        "Nessus",
        "Wireshark",
        "Metasploit Framework",
        "Splunk SIEM",
        "Git",
        "GitHub"
      ]
    },
    {
      title: "Security Foundations",
      icon: <FiCode />,
      skills: [
        "Linux",
        "Windows",
        "TCP/IP",
        "HTTP/HTTPS",
        "DNS",
        "SSL/TLS",
        "Firewall Fundamentals",
        "Network Traffic Analysis"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Arsenal</h2>
            <div className="h-[1px] bg-gray-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <SkillCategory 
                key={index} 
                title={cat.title} 
                icon={cat.icon} 
                skills={cat.skills} 
                delay={index * 0.2} 
                className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
