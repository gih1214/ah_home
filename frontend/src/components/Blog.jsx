import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
}

function BlogCard({ post, index }) {
  const url = `https://velog.io/@${profile.velog}/${post.url_slug}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-neutral-800/50 border border-gray-100 dark:border-neutral-700/50 hover:border-sky-200 dark:hover:border-sky-500/30 hover:shadow-lg dark:hover:shadow-none transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {post.thumbnail && (
        <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-neutral-700 transition-colors duration-300">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <h4 className="text-gray-900 dark:text-white font-semibold mb-2 line-clamp-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
          {post.title}
        </h4>
        <p className="text-gray-500 dark:text-neutral-400 text-sm line-clamp-2 mb-3 transition-colors duration-300">
          {post.short_description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400 dark:text-neutral-500">{formatDate(post.released_at)}</span>
          <span className="text-xs text-sky-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
            읽어보기 →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function PlaceholderCard({ index }) {
  return (
    <motion.div
      className="rounded-2xl bg-gray-50 dark:bg-neutral-800/30 border border-gray-100 dark:border-neutral-700/30 p-5 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="aspect-video rounded-lg bg-gray-200 dark:bg-neutral-700/30 mb-4 animate-pulse transition-colors duration-300" />
      <div className="h-5 bg-gray-200 dark:bg-neutral-700/30 rounded mb-2 animate-pulse transition-colors duration-300" />
      <div className="h-4 bg-gray-100 dark:bg-neutral-700/20 rounded w-3/4 animate-pulse transition-colors duration-300" />
    </motion.div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog/posts')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="py-24 md:py-32 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-sky-600 dark:text-sky-400 font-medium tracking-widest uppercase mb-3">Blog</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">블로그</h3>
          <p className="text-gray-500 dark:text-neutral-400 mb-12 transition-colors duration-300">
            기술적 고민과 성장을 기록하고 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {loading
            ? [0, 1, 2].map((i) => <PlaceholderCard key={i} index={i} />)
            : posts.length > 0
              ? posts.map((post, i) => <BlogCard key={post.url_slug} post={post} index={i} />)
              : [0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl bg-gray-50 dark:bg-neutral-800/30 border border-gray-100 dark:border-neutral-700/30 p-6 flex items-center justify-center min-h-[200px] transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <p className="text-gray-400 dark:text-neutral-500 text-sm text-center transition-colors duration-300">
                    포스트를 불러올 수 없습니다.<br />
                    Velog 아이디를 설정해 주세요.
                  </p>
                </motion.div>
              ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={`https://velog.io/@${profile.velog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
          >
            모든 포스트 보기
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 3l6 5-6 5" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
