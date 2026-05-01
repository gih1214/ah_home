import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';

function CardThumbnail({ thumbnails, title, type = 'web' }) {
  const firstThumb = thumbnails?.find(Boolean);
  const isMobile = type === 'mobile';

  if (!firstThumb) return null;

  const frameClass = isMobile
    ? 'w-[90px] aspect-[9/16]'
    : 'w-[160px] aspect-video';

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-900/40 ${frameClass}`}
    >
      <img
        src={firstThumb}
        alt={`${title} 썸네일`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

function ProjectCard({ project, index, onSelect }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative p-5 md:p-6 rounded-2xl bg-white dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700/50 hover:border-sky-200 dark:hover:border-sky-500/20 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onClick={() => onSelect(project)}
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 sm:items-start">
        {/* Thumbnail (정적, 첫 장만) */}
        <CardThumbnail
          thumbnails={project.thumbnails}
          title={project.title}
          type={project.thumbnailType}
        />

        {/* Center: Project info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              {project.title}
            </h4>
            <div className="flex items-center gap-2 shrink-0 sm:hidden">
              <span className="text-xs text-gray-400 dark:text-neutral-500">{project.period}</span>
              {project.status === '현재' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 transition-colors duration-300">
                  {project.status}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-500 dark:text-neutral-400 text-sm mb-2 transition-colors duration-300">
            {project.description}
          </p>

          <p className="text-sky-600 dark:text-sky-400 text-xs mb-3">{project.role}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 dark:bg-neutral-700/60 dark:text-neutral-300 transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Period & status (sm 이상에서만) */}
        <div className="hidden sm:flex flex-col items-end gap-2 shrink-0">
          <span className="text-xs text-gray-400 dark:text-neutral-500 whitespace-nowrap">
            {project.period}
          </span>
          {project.status === '현재' && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 transition-colors duration-300">
              {project.status}
            </span>
          )}
        </div>
      </div>
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
