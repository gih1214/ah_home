import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-sky-600 dark:text-sky-400 font-medium tracking-widest uppercase mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">경험 및 경력</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-700/60 transition-colors duration-300" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400 ring-4 ring-gray-50 dark:ring-neutral-950 transition-colors duration-300" />

                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700/50 hover:border-sky-200 dark:hover:border-sky-500/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{exp.company}</h4>
                      <p className="text-sky-600 dark:text-sky-400 text-sm">{exp.role}</p>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-neutral-500 bg-gray-50 dark:bg-neutral-800 px-3 py-1 rounded-full transition-colors duration-300">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-300 transition-colors duration-300">
                        <span className="text-sky-500 dark:text-sky-400 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
