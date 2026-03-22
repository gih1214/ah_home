import { motion } from 'framer-motion';
import { techStack } from '../data/portfolio';

const categories = [
  { key: 'language',  label: 'Language' },
  { key: 'frontend',  label: 'Frontend' },
  { key: 'backend',   label: 'Backend' },
  { key: 'infra',     label: 'Infra & Tools' },
];

function IconRow({ items, delayBase = 0 }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, i) => (
        <motion.div
          key={`${item.name}-${i}`}
          className="relative group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.3, delay: delayBase + i * 0.04 }}
        >
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-800 border border-gray-100 dark:border-neutral-700 hover:border-sky-300 dark:hover:border-sky-500/50 hover:shadow-md transition-all duration-200 cursor-default p-2">
            <img
              src={item.icon}
              alt={item.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Tooltip */}
          <div className="
            absolute bottom-full left-1/2 -translate-x-1/2 mb-2
            px-2.5 py-1 rounded-lg
            bg-gray-900 dark:bg-neutral-100
            text-white dark:text-gray-900
            text-xs font-medium whitespace-nowrap
            pointer-events-none
            opacity-0 group-hover:opacity-100
            translate-y-1 group-hover:translate-y-0
            transition-all duration-150
            z-10
            after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
            after:border-4 after:border-transparent
            after:border-t-gray-900 dark:after:border-t-neutral-100
          ">
            {item.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech" className="py-24 md:py-32 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-sky-600 dark:text-sky-400 font-medium tracking-widest uppercase mb-3">Tech Stack</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">기술 스택</h3>
        </motion.div>

        <div className="space-y-8">
          {categories.map(({ key, label }, catIdx) => {
            const items = techStack[key];
            if (!items || items.length === 0) return null;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                className="flex items-center gap-6"
              >
                {/* Category label */}
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-neutral-500 w-24 shrink-0 text-right">
                  {label}
                </span>

                {/* Divider */}
                <div className="w-px h-10 bg-gray-200 dark:bg-neutral-700 shrink-0" />

                {/* Icons */}
                <IconRow items={items} delayBase={catIdx * 0.05} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
