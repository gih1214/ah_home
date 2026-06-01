import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="relative flex items-end overflow-hidden pt-30 pb-24 md:pt-44 md:pb-24 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-neutral-900 dark:to-indigo-900/30 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/40 dark:bg-sky-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Bottom fade — blends into About's white/dark bg */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent pointer-events-none z-10" />

      {/* Content — left-aligned */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-sky-600 dark:text-sky-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
          {profile.title}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-5 leading-tight whitespace-pre-line transition-colors duration-300">
          {profile.heroName}
        </h1>

        <p className="text-lg md:text-xl text-gray-500 dark:text-neutral-300 font-medium transition-colors duration-300 max-w-2xl">
          {profile.tagline}
        </p>
      </motion.div>
    </section>
  );
}
