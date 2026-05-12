import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge-wrapper">
            <span className="badge glass-panel">
              <span className="badge-dot"></span>
              Introducing the Green Liability Initiative
            </span>
          </div>
          
          <h1 className="hero-title">
            The New Standard in <br />
            <span className="text-gradient-accent">Environmental Accountability</span>
          </h1>
          
          <p className="hero-subtitle">
            Measure, track, and manage green liability. We provide the transparency needed to end greenwashing and build genuine sustainability for businesses, investors, and regulators.
          </p>
          
          <div className="hero-actions">
            <a href="#waitlist" className="btn-primary">
              Join the Waitlist <ArrowRight size={18} />
            </a>
            <a href="#problem" className="btn-secondary">
              Learn More <ChevronRight size={18} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-glow"></div>
          <div className="glass-panel abstract-dashboard">
            <div className="dashboard-header">
              <div className="dots"><span></span><span></span><span></span></div>
              <div className="title">GLI Liability Index</div>
            </div>
            <div className="dashboard-body">
              <div className="metric-card">
                <div className="metric-label">Total Carbon Offset</div>
                <div className="metric-value text-gradient-accent">-4,250t</div>
              </div>
              <div className="chart-mockup">
                <div className="bar b1"></div>
                <div className="bar b2"></div>
                <div className="bar b3"></div>
                <div className="bar b4"></div>
                <div className="bar b5"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
