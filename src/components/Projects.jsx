import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiFolder } from 'react-icons/fi';

const ProjectCard = ({ title, description, tech, type, delay, github, placeholder, wide }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`glass p-6 rounded-xl flex flex-col h-full group hover:-translate-y-2 transition-all duration-300 border border-gray-800 hover:border-neon-blue ${wide ? 'lg:col-span-2' : ''}`}
  >
    <div className="flex justify-between items-center mb-6">
      <FiFolder className="text-4xl text-neon-blue group-hover:text-neon-green transition-colors" />
      <div className="flex gap-4">
        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
            <FiGithub className="text-xl" />
          </a>
        ) : (
          <span className="text-gray-700 text-sm">&nbsp;</span>
        )}
      </div>
    </div>
    {placeholder ? (
      <div className="flex-grow flex flex-col items-center justify-center text-center py-8">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        {type && <p className="text-neon-green font-mono text-sm mb-4">{type}</p>}
        <p className="text-gray-400 mb-2 text-sm">{description}</p>
        {tech && <p className="text-gray-500 text-xs font-mono mt-4">{tech.join(' • ')}</p>}
      </div>
    ) : (
      <>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{title}</h3>
        <p className="text-neon-green font-mono text-sm mb-4">{type}</p>

        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
          {description}
        </p>

        {tech && (
          <ul className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-800">
            {tech.map((item, i) => (
              <li key={i} className="text-gray-500 text-xs font-mono">
                {item}
              </li>
            ))}
          </ul>
        )}
      </>
    )}
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "CampusDesk Complaint Suite",
      type: "Full-Stack Web Application",
      description: "AI-powered complaint management system for educational institutions that prioritizes complaints based on severity. Features AI-based complaint prioritization, student complaint management, and security/threat prioritization.",
      tech: ["React", "Node.js", "MongoDB", "Express", "AI"],
      github: "https://github.com/gyanesh-chand/AI_Based_College_Complaint_Management_System",
      wide: true
    },
    {
      title: "More Projects Coming Soon...",
      type: "Currently building more cybersecurity and full-stack projects.",
      description: "Stay tuned — I'll be adding more projects focused on web security, bug bounties, and full-stack systems.",
      tech: [],
      placeholder: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
            <div className="h-[1px] bg-gray-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
                delay={index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
