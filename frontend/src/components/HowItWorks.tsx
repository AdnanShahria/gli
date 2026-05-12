import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Connect Data",
      desc: "Integrate APIs from ERPs, supply chain software, and IoT sensors to automatically pull environmental data."
    },
    {
      num: "02",
      title: "Compute Liability",
      desc: "Our proprietary algorithm normalizes the data and calculates your standardized Green Liability Index."
    },
    {
      num: "03",
      title: "Report & Comply",
      desc: "Generate audit-ready reports for stakeholders, regulators, and public disclosures with one click."
    }
  ];

  return (
    <section className="section-padding bg-tertiary border-y">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">How It Works</h2>
        </div>
        
        <div className="steps-container">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              className="step-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="step-number text-gradient-accent">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {idx !== steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
