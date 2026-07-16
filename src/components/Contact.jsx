import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSending(true);
    // TODO: Integrate with EmailJS or Formspree for actual email sending
    await new Promise(r => setTimeout(r, 1500)); // Simulate send
    setSending(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.03)',
    border: 'none',
    borderBottom: '1.5px solid rgba(255, 255, 255, 0.12)',
    padding: '0.85rem 0 0.65rem',
    color: '#E2E8F0',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    background: 'transparent',
  };

  const socials = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/vikashsparmar', label: 'GitHub' },       // TODO: Update
    { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/vikash-sharma', label: 'LinkedIn' }, // TODO: Update
    { icon: <FiTwitter size={20} />, href: 'https://twitter.com/vikashsparmar', label: 'Twitter' },    // TODO: Update
  ];

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ color: '#10B981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '3px' }}
        >
          &gt; get.in.touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading"
          style={{ marginBottom: '3.5rem' }}
        >
          Let's Build Something Together
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p style={{ color: '#94A3B8', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: <FiMail size={17} />, label: 'Email', value: 'sidhartsingh4455@gmail.com', href: 'mailto:sidhartsingh4455@gmail.com' },
                { icon: <FiPhone size={17} />, label: 'Phone', value: '+91 6206551548', href: 'tel:+916206551548' },
                { icon: <FiMapPin size={17} />, label: 'Location', value: 'India' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#10B981', flexShrink: 0,
                  }}>
                    {item.icon}
                  </span>
                  <div>
                    <p style={{ color: '#64748B', fontSize: '0.72rem', fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          color: '#CBD5E1',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = '#10B981'}
                        onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="social-link"
                  style={{ width: '48px', height: '48px' }}
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center', padding: '3rem',
                  background: 'rgba(16,185,129,0.05)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: '#10B981', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  Message Sent!
                </h3>
                <p style={{ color: '#94A3B8' }}>Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-emerald"
                  style={{ marginTop: '1.5rem' }}
                >
                  <span>Send Another</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Name */}
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        borderBottomColor: errors.name ? '#EF4444' : formData.name ? '#10B981' : 'rgba(255,255,255,0.12)',
                      }}
                      aria-label="Your Name"
                    />
                    <label
                      htmlFor="name"
                      style={{
                        position: 'absolute', top: formData.name ? '-1rem' : '0.85rem',
                        left: 0, color: formData.name ? '#10B981' : '#64748B',
                        fontSize: formData.name ? '0.72rem' : '0.95rem',
                        transition: 'all 0.3s', pointerEvents: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      Your Name
                    </label>
                    {errors.name && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        borderBottomColor: errors.email ? '#EF4444' : formData.email ? '#10B981' : 'rgba(255,255,255,0.12)',
                      }}
                      aria-label="Your Email"
                    />
                    <label
                      htmlFor="email"
                      style={{
                        position: 'absolute', top: formData.email ? '-1rem' : '0.85rem',
                        left: 0, color: formData.email ? '#10B981' : '#64748B',
                        fontSize: formData.email ? '0.72rem' : '0.95rem',
                        transition: 'all 0.3s', pointerEvents: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      Your Email
                    </label>
                    {errors.email && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                        borderBottomColor: errors.message ? '#EF4444' : formData.message ? '#10B981' : 'rgba(255,255,255,0.12)',
                      }}
                      aria-label="Your Message"
                    />
                    <label
                      htmlFor="message"
                      style={{
                        position: 'absolute', top: formData.message ? '-1rem' : '0.85rem',
                        left: 0, color: formData.message ? '#10B981' : '#64748B',
                        fontSize: formData.message ? '0.72rem' : '0.95rem',
                        transition: 'all 0.3s', pointerEvents: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                      }}
                    >
                      Your Message
                    </label>
                    {errors.message && <p style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '0.35rem' }}>{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={sending}
                    className="btn-solid"
                    style={{ justifyContent: 'center', opacity: sending ? 0.75 : 1 }}
                  >
                    <FiSend size={16} />
                    <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
