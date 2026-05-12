import React from 'react';
import { motion } from 'framer-motion';

export const Benefits: React.FC = () => {
  const benefits = [
    { title: "Transparency", desc: "Open, verifiable data ends greenwashing and builds trust." },
    { title: "Compliance Readiness", desc: "Stay ahead of regulatory curves with automated ESG reporting." },
    { title: "Risk Visibility", desc: "Identify and price environmental liabilities before they impact valuation." },
    { title: "Better Reporting", desc: "Move from static PDFs to dynamic, real-time sustainability dashboards." }
  ];

  return (
    <section id="benefits" className="section-padding">
      <div className="container">
        <div className="benefits-grid">
          <motion.div 
            className="benefits-intro"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Why GLI?</h2>
            <p className="section-subtitle">
              Built for the modern enterprise that recognizes environmental impact is intrinsically tied to financial performance.
            </p>
          </motion.div>
          
          <div className="benefits-cards">
            {benefits.map((b, i) => (
              <motion.div 
                key={i} 
                className="benefit-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
