import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  const loaderLines = [
    '> Initializing portfolio...',
    '> Loading project data...',
    '> Compiling components...',
    '> Building animations...',
    '> Ready.',
  ];

  useEffect(() => {
    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < loaderLines.length) {
        setLines(prev => [...prev, loaderLines[lineIndex]]);
        setProgress(Math.round(((lineIndex + 1) / loaderLines.length) * 100));
        lineIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 600);
      }
    }, 420);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-screen"
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <span
            className="text-4xl font-bold"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#10B981', textShadow: '0 0 30px rgba(16,185,129,0.6)' }}
          >
            SKS
          </span>
          <p className="text-xs mt-1" style={{ color: '#94A3B8', letterSpacing: '4px', fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase' }}>
            Portfolio
          </p>
        </motion.div>

        {/* Terminal Lines */}
        <div className="mb-6 w-80">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="loader-text mb-1"
              style={{
                color: line === '> Ready.' ? '#10B981' : '#94A3B8',
                fontWeight: line === '> Ready.' ? '700' : '400',
              }}
            >
              {line}
              {i === lines.length - 1 && (
                <span
                  className="ml-1 inline-block"
                  style={{
                    width: '8px',
                    height: '1em',
                    background: '#10B981',
                    animation: 'blink 1s step-end infinite',
                    verticalAlign: 'middle',
                  }}
                />
              )}
            </motion.p>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="loader-progress">
          <motion.div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
        <p className="mt-2 text-xs" style={{ color: '#94A3B8', fontFamily: 'JetBrains Mono, monospace' }}>
          {progress}%
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
