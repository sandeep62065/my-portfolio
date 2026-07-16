import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
    >
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; academic.journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          Academic Journey
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            style={{
              position: 'absolute',
              left: 0, top: '4px',
              width: '2px',
              background: 'linear-gradient(180deg, #10B981, #06B6D4, rgba(245,158,11,0.4))',
              boxShadow: '0 0 8px rgba(16,185,129,0.3)',
              transformOrigin: 'top',
            }}
          />

          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.18 }}
              style={{ position: 'relative', marginBottom: '2rem' }}
            >
              {/* Node */}
              <div style={{
                position: 'absolute',
                left: '-2.375rem',
                top: '1.2rem',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: edu.color,
                boxShadow: `0 0 14px ${edu.color}`,
                border: '2px solid var(--bg-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '0.5rem' }}>{edu.icon}</span>
              </div>

              <div
                className="glass"
                style={{
                  padding: '1.5rem 1.75rem',
                  borderRadius: '14px',
                  borderColor: `${edu.color}22`,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${edu.color}55`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${edu.color}22`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${edu.color}22`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '1rem', fontWeight: 700,
                      color: '#E2E8F0', marginBottom: '0.25rem',
                    }}>
                      {edu.degree}
                    </h3>
                    <p style={{ color: edu.color, fontSize: '0.88rem', fontWeight: 600 }}>
                      {edu.institution}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.2rem 0.7rem',
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}44`,
                      borderRadius: '9999px',
                      color: edu.color,
                      fontSize: '0.72rem',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>
                      {edu.duration}
                    </span>
                    {edu.cgpa && (
                      <p style={{ color: '#64748B', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                        CGPA: {edu.cgpa}  {/* TODO: Update actual CGPA */}
                      </p>
                    )}
                    {edu.percentage && (
                      <p style={{ color: '#64748B', fontSize: '0.78rem', marginTop: '0.3rem' }}>
                        Score: {edu.percentage}  {/* TODO: Update actual % */}
                      </p>
                    )}
                  </div>
                </div>

                {edu.highlights && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                    {edu.highlights.map((h) => (
                      <span key={h} style={{
                        padding: '0.15rem 0.6rem',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '4px',
                        color: '#94A3B8',
                        fontSize: '0.72rem',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
