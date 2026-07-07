import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, tasks, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 md:pl-0"
  >
    <div className="md:grid md:grid-cols-5 gap-8 items-start relative group">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-[40%] md:-translate-x-[7px] top-[10px] w-4 h-4 rounded-full bg-neon-blue border-4 border-[#050505] z-10 group-hover:bg-neon-green transition-colors duration-300"></div>
      
      {/* Company & Role */}
      <div className="md:col-span-2 text-left md:text-right mb-4 md:mb-0 md:pr-12 lg:pr-16">
        <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 md:whitespace-nowrap">{role}</h3>
        <p className="text-neon-green font-mono">{company}</p>
      </div>

      {/* Details */}
      <div className="md:col-start-3 md:col-span-3 glass p-6 rounded-xl border-l-4 border-l-transparent group-hover:border-l-neon-green transition-all duration-300">
        <ul className="space-y-3">
          {tasks.map((task, i) => (
            <li key={i} className="text-gray-400 flex items-start gap-3">
              <span className="text-neon-blue mt-1">▹</span>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "VAPT Intern",
      company: "CyArt",
      tasks: [
        "Worked on comprehensive web application security testing to identify vulnerabilities.",
        "Performed vulnerability assessments and generated detailed security reports.",
        "Learned and applied real-world penetration testing workflows and methodologies.",
        "Conducted in-depth security analysis to improve overall application posture."
      ]
    },
    {
      role: "Web VAPT Intern",
      company: "CyberDozo",
      tasks: [
        "Worked on various security testing tasks and challenges.",
        "Prepared comprehensive testing reports documenting findings and remediation steps.",
        "Improved practical cybersecurity skills through hands-on tasks."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16 justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] md:left-[40%] top-0 bottom-0 w-[2px] bg-gray-800"></div>
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <ExperienceItem 
                  key={index}
                  role={exp.role}
                  company={exp.company}
                  tasks={exp.tasks}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
