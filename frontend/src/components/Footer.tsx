import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer border-t">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Leaf className="logo-icon" />
              <span className="logo-text">GLI</span>
            </a>
            <p className="footer-desc">
              The new standard in environmental accountability.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Platform</h4>
              <a href="#solution">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#problem">The Problem</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="link-group">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Green Liability Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
