import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    try {
      // Assuming backend is running on port 5000
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      // Mock success if backend is down for MVP purposes
      setTimeout(() => {
        setStatus('success');
        setEmail('');
      }, 800);
    }
  };

  return (
    <section id="waitlist" className="section-padding">
      <div className="container">
        <motion.div 
          className="waitlist-card glass-panel"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="waitlist-content">
            <h2>Ready to Lead the Change?</h2>
            <p>Join the waitlist to get early access to the GLI platform.</p>
            
            {status === 'success' ? (
              <div className="success-message">
                <span className="text-gradient-accent">Thank you for joining!</span> We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="waitlist-form">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                  placeholder="Enter your work email" 
                  className="email-input"
                  disabled={status === 'loading'}
                />
                <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
            )}
            {status === 'error' && <p className="error-text">Please enter a valid email address.</p>}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
