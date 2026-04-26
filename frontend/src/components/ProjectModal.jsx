import { motion } from 'framer-motion';
import { useEffect } from 'react';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 24 } },
  exit: { opacity: 0, y: 30, scale: 0.97, transition: { duration: 0.2 } },
};

export default function ProjectModal({ project, onClose }) {
  // ESC 키로 닫기 & body 스크롤 잠금
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-2xl modal-scroll"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 text-gray-500 dark:text-neutral-300 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-6 md:p-8 pt-4 md:pt-6">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              {project.status === '현재' && (
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400 dark:text-neutral-500 mb-1">{project.period}</p>
            <p className="text-sky-600 dark:text-sky-400 text-sm">{project.role}</p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 dark:bg-neutral-700/60 dark:text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 text-sm font-medium text-gray-600 dark:text-neutral-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub에서 보기
            </a>
          )}

          {/* Detail description */}
          {project.detailDescription && (
            <p className="text-sm md:text-base text-gray-600 dark:text-neutral-300 leading-relaxed mb-8 whitespace-pre-line">
              {project.detailDescription}
            </p>
          )}

          {/* Overview */}
          {project.overview && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">개요</h4>
              <div className="rounded-xl border border-gray-100 dark:border-neutral-700/50 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      { label: '서비스', value: project.overview.service },
                      { label: '팀 구성', value: project.overview.team },
                      { label: '주요 역할', value: project.overview.mainRole },
                      { label: '기여도', value: project.overview.contribution },
                    ].map(({ label, value }) => (
                      <tr key={label} className="border-b border-gray-100 dark:border-neutral-700/50 last:border-0">
                        <td className="py-3 px-4 font-medium text-gray-500 dark:text-neutral-400 whitespace-nowrap w-24 bg-gray-50 dark:bg-neutral-900/40">
                          {label}
                        </td>
                        <td className="py-3 px-4 text-gray-700 dark:text-neutral-200">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Contributions */}
          {project.contributions?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">핵심 기여 및 구현 상세</h4>
              <div className="space-y-4">
                {project.contributions.map((contrib, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 dark:border-neutral-700/50 p-4">
                    <h5 className="font-semibold text-gray-800 dark:text-neutral-100 mb-3 text-sm">
                      {contrib.title}
                    </h5>
                    <ul className="space-y-2">
                      {contrib.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-300">
                          <span className="text-sky-500 dark:text-sky-400 shrink-0 mt-0.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">주요 기능</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 dark:border-neutral-700/50 overflow-hidden"
                  >
                    {/* Feature GIF */}
                    {feature.gif && (
                      <div className="bg-gray-50 dark:bg-neutral-900/50 p-4 flex justify-center">
                        <img
                          src={feature.gif}
                          alt={feature.title}
                          className="max-h-72 rounded-lg object-contain"
                        />
                      </div>
                    )}
                    {/* Feature text */}
                    <div className="p-4">
                      <h5 className="font-semibold text-gray-800 dark:text-neutral-100 mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Solving */}
          {project.problemSolving?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">기술적 해결 및 협업 포인트</h4>
              <div className="space-y-4">
                {project.problemSolving.map((ps, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 dark:border-neutral-700/50 p-4 space-y-3">
                    <h5 className="font-semibold text-gray-800 dark:text-neutral-100 text-sm flex items-center gap-2">
                      <span>🚀</span>
                      <span>{ps.title}</span>
                    </h5>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5">
                        상황
                      </span>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">{ps.situation}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5">
                        해결
                      </span>
                      <p className="text-sm text-gray-500 dark:text-neutral-400">{ps.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Takeaways */}
          {project.takeaways?.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">프로젝트 성과 및 배운 점</h4>
              <ul className="space-y-2">
                {project.takeaways.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-300">
                    <span className="text-sky-500 dark:text-sky-400 shrink-0">▹</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">주요 성과</h4>
            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-gray-600 dark:text-neutral-300">
                  <span className="text-sky-500 dark:text-sky-400 shrink-0">▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problem & Solution (legacy single field) */}
          {project.problem && (
            <div className="mb-8 pt-5 border-t border-gray-100 dark:border-neutral-700/50 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5">
                  Problem
                </span>
                <p className="text-sm text-gray-500 dark:text-neutral-400">{project.problem}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5">
                  Solution
                </span>
                <p className="text-sm text-gray-500 dark:text-neutral-400">{project.solution}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
