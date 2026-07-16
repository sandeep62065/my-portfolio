import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '../data/portfolioData';

const TechTile = ({ tech, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="tech-tile"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ y: -5, scale: 1.06 }}
    >
      <span className="tech-icon" style={{ fontSize: '1.8rem', lineHeight: 1 }}>
        {tech.icon}
      </span>
      <span style={{
        fontSize: '0.73rem', fontFamily: 'JetBrains Mono, monospace',
        color: '#CBD5E1', textAlign: 'center', fontWeight: 500,
      }}>
        {tech.name}
      </span>
      {/* Proficiency bar */}
      <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${tech.level}%` } : {}}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '100%',
            background: `linear-gradient(90deg, #10B981, ${tech.color || '#06B6D4'})`,
            borderRadius: '2px',
            boxShadow: '0 0 6px rgba(16,185,129,0.5)',
          }}
        />
      </div>
      <span style={{ fontSize: '0.62rem', color: '#64748B', fontFamily: 'JetBrains Mono, monospace' }}>
        {tech.level}%
      </span>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="tech"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; tech.stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          Technologies I Work With
        </motion.h2>

        {Object.entries(techStack).map(([category, techs], catIndex) => (
          <div key={category} style={{ marginBottom: '3rem' }}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: catIndex * 0.1 }}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                color: '#94A3B8',
                fontSize: '0.82rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span style={{ color: '#10B981' }}>#</span>
              {category}
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(16,185,129,0.3), transparent)' }} />
            </motion.h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
              gap: '0.85rem',
            }}>
              {techs.map((tech, i) => (
                <TechTile key={tech.name} tech={tech} index={catIndex * 6 + i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
