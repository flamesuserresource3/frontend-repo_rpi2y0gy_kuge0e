import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const codeSample = `// Watch Me Code — sample JS
function greet(name) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  return '${'${greeting}'} ${'${name}'}, let\'s build something incredible!';
}

const tools = ['AI', 'Automation', 'Web'];
for (const t of tools) {
  console.log('Working with', t);
}`;

const projects = [
  { title: 'Project One', tags: ['Web App'], desc: 'Modern responsive web application with clean UI.', cat: 'Web Apps' },
  { title: 'Project Two', tags: ['AI'], desc: 'Intelligent assistant leveraging ML models.', cat: 'AI' },
  { title: 'Project Three', tags: ['Automation'], desc: 'Workflow automation with OCR and RPA.', cat: 'Automation' },
  { title: 'Project Four', tags: ['Web App'], desc: 'Real-time dashboard with charts and metrics.', cat: 'Web Apps' },
  { title: 'Project Five', tags: ['AI'], desc: 'Computer vision pipeline using OpenCV.', cat: 'AI' },
  { title: 'Project Six', tags: ['Automation'], desc: 'Task scheduler and orchestration system.', cat: 'Automation' },
];

const filters = ['All', 'Web Apps', 'AI', 'Automation'];

export default function ProjectsAndCode() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.cat === active);
  }, [active]);

  return (
    <section id="projects" className="w-full bg-[#0b0f14] px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Watch Me Code */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Watch Me Code
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0e131a] shadow-[0_0_30px_rgba(251,146,60,0.08)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-slate-400">sample.js</span>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
            <code className="block whitespace-pre text-slate-200">
              {codeSample}
            </code>
          </pre>
        </motion.div>

        {/* Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-center text-2xl font-bold text-transparent sm:text-3xl"
        >
          Projects That Define Me
        </motion.h3>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                active === f
                  ? 'border-orange-400 bg-orange-500/20 text-orange-200 shadow-[0_0_18px_rgba(251,146,60,0.35)]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-orange-400/40 hover:text-orange-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0e131a] shadow-[0_0_25px_rgba(255,153,51,0.08)]"
            >
              <div className="h-40 w-full bg-gradient-to-br from-orange-600/40 via-amber-400/20 to-orange-700/40 transition-transform duration-300 group-hover:scale-[1.02]" />
              <div className="p-5">
                <div className="text-lg font-semibold text-slate-100">{p.title}</div>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-xs text-orange-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <button className="rounded-full border border-orange-500/40 px-4 py-1.5 text-sm text-orange-200 transition-colors hover:border-orange-400 hover:text-orange-100">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
