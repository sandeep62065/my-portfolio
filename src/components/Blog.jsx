import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import { blogPosts } from '../data/portfolioData';

// Syntax highlighting via color mapping
const getTokenColor = (token) => {
  if (['const', 'db', 'useEffect', 'useState'].includes(token)) return '#06B6D4';
  if (['aggregate', 'find', 'match', 'group', 'sort', 'useLocalStorage'].includes(token)) return '#F59E0B';
  if (token.startsWith('"') || token.startsWith("'")) return '#10B981';
  if (token === '=>' || token === '=' || token === '+') return '#E879F9';
  if (!isNaN(token.replace('-', ''))) return '#F59E0B';
  return '#E2E8F0';
};

const CodeBlock = ({ code }) => (
  <pre style={{
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.72rem',
    lineHeight: 1.7,
    color: '#E2E8F0',
    overflow: 'auto',
    padding: '0.75rem 1rem',
    background: 'transparent',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-all',
  }}>
    {code}
  </pre>
);

const BlogCard = ({ post, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="code-card"
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12 }}
    >
      {/* Card Header (like a code editor tab) */}
      <div className="code-card-header">
        <div className="code-dot" style={{ background: '#FF5F57' }} />
        <div className="code-dot" style={{ background: '#FEBC2E' }} />
        <div className="code-dot" style={{ background: '#28C840' }} />
        <span style={{
          marginLeft: '0.5rem',
          fontSize: '0.7rem',
          color: '#64748B',
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          {post.type === 'snippet' ? `${post.title.toLowerCase().replace(/ /g, '_')}.js` : 'post.md'}
        </span>
      </div>

      {/* Code Preview */}
      {post.code && (
        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <CodeBlock code={post.code} />
        </div>
      )}

      {/* Post Info */}
      <div style={{ padding: '1rem 1.25rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.65rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="tech-badge" style={{ fontSize: '0.65rem' }}>{tag}</span>
          ))}
        </div>
        <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '0.4rem', lineHeight: 1.4 }}>
          {post.title}
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#64748B', fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace' }}>
            <FiCalendar size={12} /> {post.date}
          </span>
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              color: '#10B981', fontSize: '0.78rem',
              fontFamily: 'JetBrains Mono, monospace',
              textDecoration: 'none', fontWeight: 600,
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.gap = '0.5rem'}
            onMouseLeave={e => e.currentTarget.style.gap = '0.3rem'}
          >
            Read More <FiArrowRight size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="blog"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
    >
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; latest.thoughts
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          Latest Thoughts & Code
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
