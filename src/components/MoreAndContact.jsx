import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';

export default function MoreAndContact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const year = new Date().getFullYear();

  return (
    <section className="w-full bg-[#0b0f14] px-6 pb-12 pt-4 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Academic & Certifications */}
        <motion.h3
          id="academic"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Academic Excellence
        </motion.h3>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-[#0e131a] p-5"
          >
            <div className="text-lg font-semibold text-orange-200">Education</div>
            <p className="mt-1 text-sm text-slate-300">Bachelor’s Degree in Software Engineering</p>
          </motion.div>

          {['AI Fundamentals', 'Python Developer', 'Full Stack Web Development'].map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0e131a] p-5"
            >
              <div className="text-lg font-semibold text-orange-200">{cert}</div>
              <p className="mt-1 text-sm text-slate-300">Certification of completion and excellence.</p>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.h3
          id="languages"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center text-2xl font-semibold sm:text-3xl"
        >
          Global Communication
        </motion.h3>
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-4">
          {[
            { name: 'English', lvl: 95, note: 'Fluent' },
            { name: 'French', lvl: 85, note: 'Advanced' },
            { name: 'Arabic', lvl: 100, note: 'Native' },
          ].map((l) => (
            <div key={l.name} className="rounded-xl border border-white/10 bg-[#0e131a] p-5">
              <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                <span>
                  {l.name} <span className="text-slate-400">({l.note})</span>
                </span>
                <span className="text-orange-300">{l.lvl}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-400 shadow-[0_0_12px_rgba(251,146,60,0.6)]"
                  style={{ width: `${l.lvl}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Beyond Coding */}
        <motion.h3
          id="beyond"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center text-2xl font-semibold sm:text-3xl"
        >
          Beyond Coding
        </motion.h3>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {['Sports', 'Design', 'Community work', 'Mentoring'].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-5 text-center text-sm text-orange-200 shadow-[0_0_20px_rgba(251,146,60,0.15)]"
            >
              {t}
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.h3
          id="contact"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl"
        >
          Let’s Build Something Incredible
        </motion.h3>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-300">
          I’d love to collaborate on impactful projects. Drop a message and I’ll get back to you.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-[#0e131a] p-6">
            <div className="grid grid-cols-1 gap-4">
              <input
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none"
                placeholder="Email"
                required
              />
              <textarea
                rows={5}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-orange-400 focus:outline-none"
                placeholder="Message"
                required
              />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(251,146,60,0.5)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(251,146,60,0.7)]"
              >
                Send Message
              </button>
              {sent && <span className="text-sm text-orange-300">Thank you! Message sent.</span>}
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-[#0e131a] p-6">
            <div className="text-sm text-slate-300">Connect with me</div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 transition-colors hover:border-orange-400 hover:text-orange-100"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 transition-colors hover:border-orange-400 hover:text-orange-100"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 transition-colors hover:border-orange-400 hover:text-orange-100"
              >
                <Mail size={16} /> Email
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200 transition-colors hover:border-orange-400 hover:text-orange-100"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 rounded-2xl border-t border-orange-500/20 pt-6 text-center text-sm text-slate-400">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-2">
            <p className="text-left">© {year} Zaki Oussama</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-200 transition-colors hover:border-orange-400 hover:text-orange-100"
              aria-label="Back to top"
            >
              <ArrowUp size={14} /> Top
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
