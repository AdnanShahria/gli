import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BarChart3, Database } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="solution" className="section-padding">
      <div className="container">
        <div className="solution-layout">
          <motion.div 
            className="solution-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">A Unified Ledger for <span className="text-gradient-accent">Green Liability</span></h2>
            <p className="solution-desc">
              GLI provides a standardized framework to measure, track, and understand environmental liability. 
              By connecting operational data directly to an immutable ledger, we ensure that sustainability claims 
              are mathematically verifiable.
            </p>
            
            <ul className="feature-list">
              <li>
                <ShieldCheck className="feature-icon" />
                <span><strong>Verifiable Claims:</strong> Cryptographically secured environmental reporting.</span>
              </li>
              <li>
                <Database className="feature-icon" />
                <span><strong>Continuous Integration:</strong> API-first data ingestion from IoT sensors and ERPs.</span>
              </li>
              <li>
                <BarChart3 className="feature-icon" />
                <span><strong>Standardized Metrics:</strong> Apples-to-apples comparison across industries.</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="solution-visual glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glow-sphere"></div>
            <div className="code-window">
              <div className="window-header">
                <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
              </div>
              <pre className="code-block">
                <code>
{`{
  "entityId": "GLI-9482X",
  "timestamp": "2026-05-12T14:32:00Z",
  "liabilityScore": {
    "carbon": 42.5,
    "water": 12.1,
    "waste": 8.4
  },
  "verification": {
    "status": "verified",
    "hash": "0x8f2c...4a1b"
  }
}`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
