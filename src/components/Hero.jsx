import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';

// ============================
//  CODE RAIN CANVAS
// ============================
const CodeRainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = [
      '<div>', '</div>', 'const', 'async', 'await', 'return', 'useState',
      'useEffect', '.find()', '.map()', '=>', '{}', 'mongodb://',
      'express()', 'router.get', 'mongoose', 'JWT', 'req.body', 'res.json',
      '0', '1', '</', '/>', 'npm', 'node', 'React', 'props', 'API',
    ];

    const fontSize = 12;
    const cols = Math.floor(canvas.width / 38);
    const drops = Array.from({ length: cols }, () => Math.random() * -80);
    const speeds = Array.from({ length: cols }, () => 0.4 + Math.random() * 1.2);

    let animId;
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const opacity = 0.06 + Math.random() * 0.1;
        ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`;
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        ctx.fillText(char, i * 38, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;
        drops[i] += speeds[i];
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

// ============================
//  HERO SECTION
// ============================
const Hero = () => {
  const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'Backend Specialist', 'Problem Solver'];
  const [roleText, setRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (roleText.length < current.length) {
        timeout = setTimeout(() => setRoleText(current.slice(0, roleText.length + 1)), 85);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (roleText.length > 0) {
        timeout = setTimeout(() => setRoleText(roleText.slice(0, -1)), 45);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 10);
      }
    }
    return () => clearTimeout(timeout);
  }, [roleText, isDeleting, roleIndex]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { icon: <FiGithub size={19} />, href: 'https://github.com/sandeep62065', label: 'GitHub' },      // TODO: Update URL
    { icon: <FiLinkedin size={19} />, href: 'https://www.linkedin.com/in/sandeep-kumar-singh-a861b5343', label: 'LinkedIn' }, // TODO: Update URL
    { icon: <FiTwitter size={19} />, href: 'https://twitter.com/vikashsparmar', label: 'Twitter' },    // TODO: Update URL
    { icon: <FiMail size={19} />, href: 'mailto:sidhartsingh4455@gmail.com', label: 'Email' },          // TODO: Update email
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.07) 0%, transparent 65%)',
      }}
    >
      <CodeRainCanvas />

      {/* Depth overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 35%, rgba(10,14,23,0.65) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Main Content */}
      <div style={{
        position: 'relative', zIndex: 2, textAlign: 'center',
        padding: '5rem 1.5rem 2rem', maxWidth: '900px', width: '100%',
      }}>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            color: '#10B981', fontFamily: 'JetBrains Mono, monospace',
            fontSize: '1rem', marginBottom: '0.75rem', letterSpacing: '3px',
          }}
        >
          &gt; Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="glitch-text"
          data-text="Sandeep Kumar Singh"
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(2.8rem, 9vw, 6.5rem)',
            fontWeight: 800,
            color: '#E2E8F0',
            lineHeight: 1.05,
            marginBottom: '1rem',
            letterSpacing: '-1px',
          }}
        >
          Sandeep Kumar Singh
        </motion.h1>

        {/* Role Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(1rem, 3vw, 1.7rem)',
            fontWeight: 500,
            color: '#06B6D4',
            marginBottom: '1.5rem',
            minHeight: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.3rem',
          }}
        >
          <span style={{ color: '#94A3B8', opacity: 0.7, fontSize: '0.85em' }}>// </span>
          <span>{roleText}</span>
          <span
            style={{
              display: 'inline-block', width: '2px', height: '1.35em',
              background: '#10B981', boxShadow: '0 0 8px #10B981',
              animation: 'blink 1s step-end infinite', marginLeft: '2px',
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            color: '#94A3B8', fontSize: 'clamp(0.88rem, 2vw, 1.05rem)',
            maxWidth: '620px', margin: '0 auto 2.5rem', lineHeight: 1.75,
          }}
        >
          Building scalable web applications with MongoDB, Express, React, and Node.js.
          Turning ideas into robust digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('#projects')}
            className="btn-solid"
          >
            <MdOpenInNew size={17} />
            <span>View Projects</span>
          </motion.button>
          <motion.a
            href="/resume.pdf"  // TODO: Add real resume PDF path
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="btn-emerald"
            download
          >
            <FiDownload size={16} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem' }}
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              className="social-link"
              aria-label={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => scrollTo('#about')}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)', textAlign: 'center',
          cursor: 'pointer', zIndex: 2,
        }}
      >
        <p style={{
          color: '#94A3B8', fontSize: '0.68rem',
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '3px', marginBottom: '0.5rem',
          textTransform: 'uppercase',
        }}>
          Scroll Down
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: '#10B981', display: 'flex', justifyContent: 'center' }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
