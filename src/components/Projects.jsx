import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

const filters = ['All', 'Full Stack', 'Frontend', 'Backend', 'API'];

// Project color gradient map per category
const categoryColors = {
  'Full Stack': 'linear-gradient(135deg, #10B981, #06B6D4)',
  'Frontend': 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
  'Backend': 'linear-gradient(135deg, #F59E0B, #EF4444)',
  'API': 'linear-gradient(135deg, #8B5CF6, #EC4899)',
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      style={{
        borderColor: hovered ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.07)',
        boxShadow: hovered ? '0 0 30px rgba(16,185,129,0.2)' : 'none',
      }}
    >
      {/* Project Image / Gradient Preview */}
      <div style={{
        height: '180px',
        background: project.image
          ? `url(${project.image}) center/cover`
          : categoryColors[project.category] || 'linear-gradient(135deg, #10B981, #06B6D4)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Code pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,14,23,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {!project.image && (
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.7rem',
              textAlign: 'center',
              padding: '1rem',
            }}>
              {`// ${project.title}`}<br />{`const app = new Innovation();`}
            </span>
          )}
        </div>

        {/* Hover overlay with links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(10,14,23,0.85)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '1rem',
                backdropFilter: 'blur(4px)',
              }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.55rem 1rem',
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.4)',
                  borderRadius: '6px',
                  color: '#10B981',
                  fontSize: '0.82rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  textDecoration: 'none',
                }}
              >
                <FiGithub size={15} /> Code
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.55rem 1rem',
                  background: 'rgba(6,182,212,0.15)',
                  border: '1px solid rgba(6,182,212,0.4)',
                  borderRadius: '6px',
                  color: '#06B6D4',
                  fontSize: '0.82rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  textDecoration: 'none',
                }}
              >
                <FiExternalLink size={15} /> Demo
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          padding: '0.2rem 0.65rem',
          background: 'rgba(10,14,23,0.75)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '9999px',
          fontSize: '0.68rem',
          color: '#10B981',
          fontFamily: 'JetBrains Mono, monospace',
          backdropFilter: 'blur(8px)',
        }}>
          {project.category}
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: '1.25rem' }}>
        <h3 style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '1.05rem', fontWeight: 700,
          color: '#E2E8F0', marginBottom: '0.5rem',
        }}>
          {project.title}
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
    >
      <div ref={ref} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; featured.projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '2.5rem' }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
