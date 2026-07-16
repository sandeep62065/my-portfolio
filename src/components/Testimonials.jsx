import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../data/portfolioData';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div ref={ref} style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; people.say
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          What People Say
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ position: 'relative' }}
        >
          {/* Active testimonial */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="glass"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              borderColor: 'rgba(16,185,129,0.15)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Quote mark */}
            <div style={{
              position: 'absolute', top: '1.5rem', left: '2rem',
              fontSize: '4rem', lineHeight: 1, color: 'rgba(16,185,129,0.15)',
              fontFamily: 'JetBrains Mono, monospace', fontWeight: 900,
            }}>
              "
            </div>

            <p style={{
              color: '#CBD5E1', fontSize: '1.05rem', lineHeight: 1.8,
              fontStyle: 'italic', marginBottom: '1.75rem',
              padding: '0 1rem',
            }}>
              "{testimonials[active].quote}"
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
              {/* Avatar */}
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.3))',
                border: '2px solid rgba(16,185,129,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                flexShrink: 0,
              }}>
                {testimonials[active].avatar ? (
                  <img src={testimonials[active].avatar} alt={testimonials[active].name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                ) : '👤'}
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', color: '#10B981', fontWeight: 700, fontSize: '0.95rem' }}>
                  {testimonials[active].name}
                </p>
                <p style={{ color: '#64748B', fontSize: '0.8rem' }}>
                  {testimonials[active].role}, {testimonials[active].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={prev}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94A3B8'; }}
              aria-label="Previous"
            >
              <FiChevronLeft size={18} />
            </button>

            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '20px' : '8px',
                    height: '8px', borderRadius: '9999px',
                    background: i === active ? '#10B981' : 'rgba(255,255,255,0.15)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: i === active ? '0 0 10px rgba(16,185,129,0.5)' : 'none',
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#94A3B8'; }}
              aria-label="Next"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
