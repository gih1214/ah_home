import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';

function ProjectCard({ project, index, onSelect }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700/50 hover:border-sky-200 dark:hover:border-sky-500/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onClick={() => onSelect(project)}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{project.title}</h4>
          <p className="text-gray-500 dark:text-neutral-400 text-sm mt-1 transition-colors duration-300">{project.description}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-gray-400 dark:text-neutral-500">{project.period}</span>
          {project.status === '현재' && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 transition-colors duration-300">
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* Role */}
      <p className="text-sky-600 dark:text-sky-400 text-sm mb-5">{project.role}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 dark:bg-neutral-700/60 dark:text-neutral-300 transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="space-y-2 mb-6">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-300 transition-colors duration-300">
            <span className="text-sky-500 dark:text-sky-400 mt-1 shrink-0" style={{ margin: 0 }}>▹</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Problem & Solution */}
      {project.problem && (
        <div className="pt-5 border-t border-gray-100 dark:border-neutral-700/50 space-y-3 transition-colors duration-300">
          <div className="flex items-start gap-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5 transition-colors duration-300">
              Problem
            </span>
            <p className="text-sm text-gray-500 dark:text-neutral-400 transition-colors duration-300">{project.problem}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5 transition-colors duration-300">
              Solution
            </span>
            <p className="text-sm text-gray-500 dark:text-neutral-400 transition-colors duration-300">{project.solution}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-sky-600 dark:text-sky-400 font-medium tracking-widest uppercase mb-3">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">프로젝트</h3>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onSelect={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
