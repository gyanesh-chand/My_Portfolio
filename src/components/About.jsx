import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiTarget } from 'react-icons/fi';

const keywords = {
  institute: 'Synergy Institute of Engineering and Technology',
  vapt: 'Vulnerability Assessment & Penetration Testing (VAPT)',
  learning: 'continuous learning'
};

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative glows to match Hero */}
      <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen">
        <div className="absolute left-1/4 top-[-10%] w-[420px] h-[420px] bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute right-1/4 top-[10%] w-[300px] h-[300px] bg-blue-500/8 rounded-full blur-[90px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.03)_0%,transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={fadeUp} transition={{ duration: 0.6 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Text content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-6 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
                <div className="h-px bg-gray-700 flex-grow mt-1" />
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Hello! I'm Gyanesh Chand, a BTech student in Computer Science and Engineering at <span className="text-neon-blue font-semibold text-glow">{keywords.institute}</span>, Dhenkanal, Odisha.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                My journey into tech started with a curiosity about how things work on the internet, which quickly evolved into a fascination with how they can be broken—and ultimately, secured. Currently, I'm working as a <span className="text-neon-green font-semibold text-glow">VAPT Intern</span> and exploring bug bounties and web application security.
              </p>

              <div className="mt-6">
                <div className="glass bg-card-bg/75 p-6 rounded-xl border border-neon-blue/8 shadow-[0_8px_30px_rgba(6,182,212,0.03)]">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-neon-blue/10 text-neon-blue mt-1">
                      <FiTarget />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-2">My Passion</div>
                      <div className="text-gray-300 italic">"My absolute passion is Web Application Penetration Testing. For me, it is not just about finding vulnerabilities, but about thinking like an attacker to solve real-world security problems and help make applications safer."</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Terminal-style card */}
            <div className="lg:col-span-5">
              <div className="w-full">
                <div className="glass bg-card-bg/70 border border-neon-blue/40 rounded-xl p-6 shadow-[0_10px_40px_rgba(6,182,212,0.03)]">
                  <div className="text-neon-green font-mono text-sm mb-4">&gt; whoami</div>
                  <div className="font-mono text-white text-lg mb-6">gyanesh_chand</div>

                  <div className="text-neon-green font-mono text-sm mb-2">&gt; cat config.json</div>
                  <pre className="bg-transparent text-gray-200 text-sm font-mono p-4 rounded-lg overflow-auto" style={{whiteSpace: 'pre-wrap'}}>
{`{
  "role": "VAPT Intern",
  "focus": [
    "Web App Sec",
    "API Security",
    "Bug Bounty"
  ],
  "status": "Learning & Hacking"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
