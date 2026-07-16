import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '4+', label: 'Technologies Mastered' },
  { value: '1', label: 'Internship Completed' },
  { value: '∞', label: 'Lines of Code' },
];

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <p style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '2rem', fontWeight: 800,
        color: '#10B981', textShadow: '0 0 20px rgba(16,185,129,0.5)',
      }}>
        {stat.value}
      </p>
      <p style={{ color: '#94A3B8', fontSize: '0.82rem', marginTop: '0.25rem' }}>
        {stat.label}
      </p>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; about.me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          About Me
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Left: Profile Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}
          >
            {/* Hexagonal Profile Frame */}
            <div style={{ position: 'relative', width: '220px', height: '220px' }}>
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: '-6px',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  background: 'linear-gradient(135deg, #10B981, #06B6D4, #10B981)',
                  zIndex: 0,
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: '-12px',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(6,182,212,0.15), rgba(16,185,129,0.3))',
                  zIndex: 0,
                }}
              />
              {/* Actual image area */}
              <div
                className="hexagon"
                style={{
                  position: 'relative', zIndex: 1,
                  width: '100%', height: '100%',
                  background: 'linear-gradient(135deg, #0F1419, #1a2332)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '4rem',
                  overflow: 'hidden',
                }}
              >
                <img 
                  src="/sandeep.jpg" 
                  alt="sandeep kumar singh" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} 
                />
              </div>
            </div>

            {/* Available for Work Badge */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="glass"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1.2rem', borderRadius: '9999px',
                borderColor: 'rgba(16,185,129,0.3)',
              }}
            >
              <span
                style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 10px #10B981',
                  animation: 'pulse 2s ease-in-out infinite',
                  display: 'inline-block',
                }}
              />
              <span style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', fontWeight: 600 }}>
                Available for Work
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                "I'm a passionate Full Stack MERN Developer who loves building scalable, performant web applications from the ground up. With a strong foundation in both frontend and backend technologies, I bridge the gap between elegant user interfaces and robust server-side architecture.",
                "My journey into tech began with a curiosity about how things work on the web. Today, I specialize in the MERN stack — crafting everything from RESTful APIs and database schemas to dynamic React frontends. I have a particular love for clean, maintainable code and solving complex backend challenges.",
                "Currently pursuing my B.Tech in Computer Science Engineering from AKTU, I'm always expanding my skills. When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and participating in hackathons.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '0.97rem' }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Quick traits */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
              {['Clean Code Advocate', 'Problem Solver', 'Quick Learner', 'Team Player'].map((trait) => (
                <span key={trait} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: '9999px',
                  color: '#10B981',
                  fontSize: '0.78rem',
                  fontFamily: 'JetBrains Mono, monospace',
                }}>
                  <FiCheckCircle size={12} />
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          marginTop: '3rem',
        }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
