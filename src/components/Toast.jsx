import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX } from 'react-icons/fi';

const Toasts = ({ toasts }) => {
  return (
    // Fixed floating container: top-right on desktop, centered on mobile
    <div className="fixed z-[9999] top-[80px] md:top-[90px] left-0 right-0 flex justify-center pointer-events-none">
      <div className="w-full flex items-start md:justify-end md:pr-[30px]">
        <div className="max-w-[380px] w-[90%] md:w-auto md:max-w-[380px]">
          <AnimatePresence>
            {toasts.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.32 }}
                // desktop: position top-right via parent; mobile: centered by parent
                className={`pointer-events-auto mb-3 rounded-[14px] overflow-hidden shadow-lg ring-1 ring-white/5 backdrop-blur-[12px] border px-4 py-3 ${t.type === 'success' ? 'bg-[#052a24] border-neon-green text-neon-green' : 'bg-[#3b0b0b] border-neon-red text-neon-red'}`}
                style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.6)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-neon-green drop-shadow-[0_0_12px_rgba(16,185,129,0.28)]">
                    {t.type === 'success' ? <FiCheckCircle /> : <FiX />}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-[15px] leading-tight">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Toasts;
