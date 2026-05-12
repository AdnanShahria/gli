import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';


export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          <Leaf className="logo-icon" />
          <span className="logo-text">GLI</span>
        </a>
        <nav className="nav-links">
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#benefits">Benefits</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#waitlist" className="btn-primary btn-sm">Join Waitlist</a>
      </div>
    </header>
  );
};
