import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const categoryMap = ['Certification', 'Hackathon', 'Achievement'];
  const categoryColors = {
    'Certification': '#10B981',
    'Hackathon': '#06B6D4',
    'Achievement': '#8B5CF6',
  };

  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; certifications.achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          Certifications & Achievements
        </motion.h2>

        {categoryMap.map((cat) => {
          const items = achievements.filter(a => a.category === cat);
          if (!items.length) return null;
          const color = categoryColors[cat];
          return (
            <div key={cat} style={{ marginBottom: '2.5rem' }}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: '#94A3B8', fontSize: '0.8rem',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}
              >
                <span style={{ color }}>#</span> {cat}s
                <span style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${color}44, transparent)` }} />
              </motion.h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
                {items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="achievement-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    style={{ borderColor: `${color}22` }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${color}55`;
                      e.currentTarget.style.boxShadow = `0 0 20px ${color}22`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = `${color}22`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: '44px', height: '44px', flexShrink: 0,
                      borderRadius: '10px',
                      background: `${color}18`,
                      border: `1px solid ${color}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.4rem',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '0.2rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ color: color, fontSize: '0.78rem' }}>{item.issuer}</p>
                      <p style={{ color: '#64748B', fontSize: '0.72rem', marginTop: '0.15rem', fontFamily: 'JetBrains Mono, monospace' }}>
                        {item.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
