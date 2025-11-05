import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f14] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f14]/60 via-[#0b0f14]/60 to-[#0b0f14]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center sm:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs tracking-wide text-orange-300 backdrop-blur">
          Welcome — Portfolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-semibold sm:text-5xl md:text-6xl"
        >
          Zaki Oussama
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl"
        >
          Software Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-4 max-w-2xl text-sm text-slate-300 sm:text-base"
        >
          Building intelligent solutions with cutting-edge technology — specializing in AI, automation systems, and modern web applications.
        </motion.p>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 grid w-full max-w-3xl grid-cols-3 gap-4"
        >
          {[
            { k: '15+', v: 'Projects Completed' },
            { k: '4', v: 'AI Tools' },
            { k: '6+', v: 'Frameworks Mastered' },
          ].map((item) => (
            <div key={item.v} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-2xl font-bold text-transparent">
                {item.k}
              </div>
              <div className="mt-1 text-xs text-slate-300">{item.v}</div>
            </div>
          ))}
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(251,146,60,0.5)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(251,146,60,0.7)]"
          >
            View Projects
          </a>
          <a
            href="#download-cv"
            className="rounded-full border border-orange-500/40 px-6 py-3 text-sm font-semibold text-orange-300 shadow-[0_0_20px_rgba(251,146,60,0.25)_inset] transition-colors hover:border-orange-400 hover:text-orange-200"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
