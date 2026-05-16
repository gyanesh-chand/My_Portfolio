import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: null, error: null });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, error: null });
    try {
      // Placeholder: replace with EmailJS or backend call
      await new Promise((res) => setTimeout(res, 900));
      setStatus({ submitting: false, success: 'Message sent — I will reply shortly.', error: null });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ submitting: false, success: null, error: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none mix-blend-screen z-0">
        <div className="absolute left-0 top-0 w-[40%] h-[60%] bg-[#00F5FF]/6 blur-[80px]" />
        <div className="absolute right-0 bottom-0 w-[40%] h-[60%] bg-green-400/6 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
            <div className="h-px bg-gray-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">Interested in collaborating, discussing cybersecurity, or working together on projects? Feel free to reach out.</p>

              <div className="glass p-6 rounded-xl border border-transparent">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-neon-blue/8 rounded-md text-neon-blue">
                    <FiMail />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a href="mailto:gyaneshchand57@gmail.com" className="text-white font-semibold hover:text-neon-blue">gyaneshchand57@gmail.com</a>
                  </div>
                </div>
                <div className="h-px bg-gray-800 my-4" />
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-neon-blue/8 rounded-md text-neon-blue">
                    <FiMapPin />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-semibold">Dhenkanal, Odisha, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="glass p-6 rounded-xl border border-transparent space-y-4">
                {status.success && <div className="text-sm text-neon-green bg-[#04241f] p-3 rounded">{status.success}</div>}
                {status.error && <div className="text-sm text-neon-red bg-[#3a0b0b] p-3 rounded">{status.error}</div>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="bg-[#0b0b0b] border border-gray-800 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 rounded px-4 py-3 text-white outline-none transition" />
                  <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email address" className="bg-[#0b0b0b] border border-gray-800 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 rounded px-4 py-3 text-white outline-none transition" />
                </div>

                <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Your message" rows={6} className="w-full bg-[#0b0b0b] border border-gray-800 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 rounded px-4 py-3 text-white outline-none transition resize-vertical" />

                <div className="flex items-center justify-end">
                  <button type="submit" disabled={status.submitting} className="inline-flex items-center gap-2 px-6 py-3 bg-neon-blue text-black font-semibold rounded hover:scale-[1.02] transition-all duration-200 shadow-[0_8px_30px_rgba(6,182,212,0.08)]">
                    <FiSend />
                    <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
