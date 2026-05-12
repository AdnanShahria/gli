import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, EyeOff } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <EyeOff className="text-gradient-accent" size={32} />,
      title: 'Greenwashing is Rampant',
      desc: 'Companies make bold claims without the data to back them up, misleading consumers and investors.',
    },
    {
      icon: <TrendingDown className="text-gradient-accent" size={32} />,
      title: 'Poor Sustainability Tracking',
      desc: 'Current metrics are fragmented and rely on self-reporting rather than empirical, continuous data.',
    },
    {
      icon: <AlertTriangle className="text-gradient-accent" size={32} />,
      title: 'Unpriced Environmental Risk',
      desc: 'Markets fail to price the true liability of pollution, leaving massive blind spots for stakeholders.',
    }
  ];

  return (
    <section id="problem" className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">The Cost of <span className="text-gradient-accent">Inaction</span></h2>
          <p className="section-subtitle">
            We are facing a crisis of accountability. The lack of transparent, verifiable data 
            makes it impossible to accurately assess environmental impact and liability.
          </p>
        </div>
        
        <div className="problem-grid">
          {problems.map((item, idx) => (
            <motion.div 
              key={idx}
              className="problem-card glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
