import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "What is Green Liability?",
      a: "Green Liability refers to the financial and environmental risks associated with a company's ecological footprint, including carbon emissions, waste, and resource depletion."
    },
    {
      q: "How does GLI ensure data accuracy?",
      a: "We connect directly to operational systems and IoT sensors, bypassing manual entry. The data is then verified and cryptographically hashed."
    },
    {
      q: "Who is GLI for?",
      a: "GLI is built for businesses tracking their impact, investors analyzing ESG portfolios, and regulators enforcing environmental compliance."
    },
    {
      q: "When will the platform launch?",
      a: "We are currently in a closed beta with select enterprise partners. Join the waitlist to get early access when we open up."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container faq-container">
        <div className="section-header text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item glass-panel">
              <button 
                className="faq-question"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`faq-icon ${openIdx === idx ? 'rotated' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="faq-answer"
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
