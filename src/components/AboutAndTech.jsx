import React from 'react';
import { motion } from 'framer-motion';

const techData = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', lvl: 95 },
      { name: 'CSS', lvl: 90 },
      { name: 'JavaScript', lvl: 92 },
      { name: 'React', lvl: 88 },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', lvl: 85 },
      { name: 'Laravel', lvl: 70 },
      { name: 'Express', lvl: 82 },
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      { name: 'Python', lvl: 90 },
      { name: 'OpenCV', lvl: 80 },
      { name: 'TensorFlow', lvl: 75 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', lvl: 90 },
      { name: 'Docker', lvl: 75 },
      { name: 'VS Code', lvl: 95 },
      { name: 'Figma', lvl: 70 },
    ],
  },
];

export default function AboutAndTech() {
  return (
    <section id="about" className="relative w-full bg-[#0b0f14] px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* About */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Building the future with AI and automation
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-3xl text-center text-slate-300"
        >
          I’m passionate about solving real-world problems using AI, automation, and clean engineering. I craft scalable, modern tools and web apps that are fast, accessible, and delightful to use.
        </motion.p>

        {/* Mini-cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {['AI-Powered Tools', 'Automation & OCR', 'Next-Gen Web Apps'].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-orange-500/20 bg-gradient-to-b from-orange-500/10 to-transparent p-5 shadow-[0_0_25px_rgba(251,146,60,0.15)]"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-lg font-semibold text-transparent">
                {label}
              </div>
              <p className="mt-1 text-sm text-slate-300">High-impact solutions with a focus on reliability and performance.</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.h3
          id="technologies"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl"
        >
          Technologies I Master
        </motion.h3>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {techData.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-orange-500/20 bg-[#0e131a] p-6 shadow-[0_0_25px_rgba(251,146,60,0.1)]"
            >
              <div className="mb-4 text-lg font-semibold text-orange-200">{block.title}</div>
              <div className="space-y-3">
                {block.items.map((it) => (
                  <div key={it.name}>
                    <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                      <span>{it.name}</span>
                      <span className="text-orange-300">{it.lvl}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-400 shadow-[0_0_12px_rgba(251,146,60,0.6)]"
                        style={{ width: `${it.lvl}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
