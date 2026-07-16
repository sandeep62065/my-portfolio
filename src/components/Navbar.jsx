import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10, 14, 23, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={() => handleNavClick('#home')}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold relative"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#10B981',
              textShadow: '0 0 20px rgba(16,185,129,0.5)',
              cursor: 'none',
            }}
          >
            SKS
            <span
              className="absolute -bottom-1 left-0 w-full h-px"
              style={{ background: 'linear-gradient(90deg, #10B981, transparent)' }}
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm transition-all duration-300 hover:text-emerald-400 relative group"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: '#94A3B8',
                  fontWeight: 400,
                  cursor: 'none',
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: '#10B981' }}
                />
              </a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-emerald ml-2"
            >
              <span>Hire Me</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#94A3B8', background: 'rgba(255,255,255,0.05)', cursor: 'none' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu-drawer"
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: '#10B981', textShadow: '0 0 20px rgba(16,185,129,0.5)' }}
                >
                  SKS
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: '#94A3B8', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="py-3 px-2 rounded-lg transition-all duration-200"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      color: '#94A3B8',
                      fontSize: '1rem',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      cursor: 'pointer',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#10B981'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
                  >
                    <span style={{ color: '#10B981', marginRight: '0.5rem' }}>{'>'}</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="btn-solid text-center"
                style={{ cursor: 'pointer' }}
              >
                <span>Hire Me</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
