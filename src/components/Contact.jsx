import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import Toasts from './Toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false });
  const [toasts, setToasts] = useState([]);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const formRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = { name: '', email: '', message: '' };
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) newErrors.email = 'Please enter your email.';
    else if (!emailRegex.test(form.email)) newErrors.email = 'Please enter a valid email address.';
    if (!form.message.trim()) newErrors.message = 'Please enter a message.';

    setErrors(newErrors);
    const hasError = Object.values(newErrors).some((v) => v !== '');
    if (hasError) return;

    // Simulate sending locally
    setStatus({ submitting: true });
    setTimeout(() => {
      setStatus({ submitting: false });
      setForm({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      pushToast('success', 'Message sent successfully!');
    }, 700);
  };

  function pushToast(type, title, subtitle = '') {
    const id = Date.now() + Math.random();
    setToasts((s) => [...s, { id, type, title, subtitle }]);
    setTimeout(() => setToasts((s) => s.filter((t) => t.id !== id)), 3000);
  }

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
              <form ref={formRef} onSubmit={handleSubmit} className="glass p-6 rounded-xl border border-transparent space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="bg-[#0b0b0b] border border-gray-800 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 rounded px-4 py-3 text-white outline-none transition" />
                    {errors.name && <div className="text-sm text-neon-red mt-1">{errors.name}</div>}
                  </div>
                  <div className="flex flex-col">
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email address" className="bg-[#0b0b0b] border border-gray-800 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 rounded px-4 py-3 text-white outline-none transition" />
                    {errors.email && <div className="text-sm text-neon-red mt-1">{errors.email}</div>}
                  </div>
                </div>

                <div className="flex flex-col">
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={6} className="w-full bg-[#0b0b0b] border border-gray-800 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 rounded px-4 py-3 text-white outline-none transition resize-vertical" />
                  {errors.message && <div className="text-sm text-neon-red mt-1">{errors.message}</div>}
                </div>

                <div className="flex items-center justify-end">
                  <button type="submit" disabled={status.submitting} className="inline-flex items-center gap-3 px-6 py-3 bg-neon-blue text-black font-semibold rounded hover:scale-[1.02] transition-all duration-200 shadow-[0_8px_30px_rgba(6,182,212,0.08)]">
                    {status.submitting ? (
                      <svg className="w-4 h-4 text-black animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    ) : (
                      <FiSend />
                    )}
                    <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
              <Toasts toasts={toasts} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
