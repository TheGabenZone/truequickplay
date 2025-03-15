import React from 'react';
// Removing the unused Link import
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; {year} True Quickplay. Todos los derechos reservados al autor.</p>
      </div>
    </footer>
  );
};

export default Footer;
