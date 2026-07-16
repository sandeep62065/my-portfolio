import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; work.experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          Professional Experience
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            style={{
              position: 'absolute',
              left: '0',
              top: '4px',
              width: '2px',
              background: 'linear-gradient(180deg, #10B981, rgba(16,185,129,0.2))',
              boxShadow: '0 0 10px rgba(16,185,129,0.3)',
              transformOrigin: 'top',
            }}
          />

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              style={{ position: 'relative', marginBottom: '2.5rem' }}
            >
              {/* Timeline Node */}
              <div
                className="timeline-node"
                style={{
                  position: 'absolute',
                  left: '-2.375rem',
                  top: '1.1rem',
                }}
              />

              {/* Card */}
              <div
                className="glass"
                style={{
                  padding: '1.75rem',
                  borderRadius: '16px',
                  borderColor: `rgba(${job.color === '#10B981' ? '16,185,129' : '245,158,11'},0.2)`,
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <FiBriefcase size={15} style={{ color: job.color }} />
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '1.05rem', fontWeight: 700,
                        color: '#E2E8F0',
                      }}>
                        {job.role}
                      </span>
                    </div>
                    <p style={{ color: job.color, fontWeight: 600, fontSize: '0.95rem', fontFamily: 'JetBrains Mono, monospace' }}>
                      {job.company}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.7rem',
                      background: `rgba(${job.color === '#10B981' ? '16,185,129' : '245,158,11'},0.12)`,
                      border: `1px solid rgba(${job.color === '#10B981' ? '16,185,129' : '245,158,11'},0.3)`,
                      borderRadius: '9999px',
                      color: job.color,
                      fontSize: '0.72rem',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>
                      {job.type}
                    </span>
                    <p style={{ color: '#64748B', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace', marginTop: '0.3rem' }}>
                      {job.duration} · {job.location}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.2 + i * 0.08 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6 }}
                    >
                      <span style={{ color: '#10B981', marginTop: '0.25rem', flexShrink: 0 }}>▸</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
