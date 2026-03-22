import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import profileImg from '../assets/profile_full.webp';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-300">
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-sky-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900 transition-colors duration-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-neutral-900 dark:to-indigo-900/30 animate-gradient" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/40 dark:bg-sky-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Content: text left, photo right */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text area */}
        <motion.div
          className="flex-1 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-sky-600 dark:text-sky-400 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            {profile.title}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
            {profile.name}
          </h1>

          <p className="text-lg md:text-2xl text-gray-500 dark:text-neutral-300 mb-10 font-medium transition-colors duration-300">
            {profile.tagline}
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-sky-500/50 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-400/10 transition-colors duration-300 text-sm"
          >
            더 알아보기
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </a>
        </motion.div>

        {/* Profile photo */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="hero-profile-wrapper">
            <img
              src={profileImg}
              alt={`${profile.name} profile`}
              className="w-full h-auto block"
              draggable="false"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hover:opacity-70 transition-opacity duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="더 알아보기"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-neutral-600 flex justify-center pt-2 transition-colors duration-300">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-neutral-400" />
        </div>
      </motion.a>
    </section>
  );
}
