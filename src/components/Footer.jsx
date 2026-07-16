import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiCode } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/vikashsparmar', label: 'GitHub' },       // TODO: Update
    { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/vikash-sharma', label: 'LinkedIn' }, // TODO: Update
    { icon: <FiTwitter size={18} />, href: 'https://twitter.com/vikashsparmar', label: 'Twitter' },    // TODO: Update
  ];

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle glow line at top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '40%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Main row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          {/* Left: Credit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FiCode size={16} style={{ color: '#10B981' }} />
            <span style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
              Designed & Built by{' '}
              <span style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                Sandeep Kumar Singh
              </span>
            </span>
          </div>

          {/* Center: Quick Nav */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{
                  color: '#64748B',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#10B981'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Socials */}
          <div style={{ display: 'flex', gap: '0.65rem' }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="social-link"
                style={{ width: '38px', height: '38px' }}
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '1.25rem' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ color: '#475569', fontSize: '0.78rem', fontFamily: 'JetBrains Mono, monospace' }}>
            © 2025 Sandeep Kumar Singh. All rights reserved.
          </p>
          <p style={{ color: '#334155', fontSize: '0.78rem' }}>
            Made with ☕ and lots of code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
