import React from 'react';
import '../style/Footer.css';

const socialLinks = [
  { icon: 'github', url: 'https://github.com/Lavandev', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com/company/lavandev', label: 'LinkedIn' },
  { icon: 'twitter', url: 'https://twitter.com/lavandev', label: 'Twitter' },
  { icon: 'envelope', url: 'mailto:contact@lavandev.com', label: 'Email' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">Lavandev</h3>
            <p className="footer-subtitle">Development Company</p>
            <p className="footer-description">
              Building digital experiences with modern web technologies
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {['Home', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="contact-info">
              <a href="mailto:contact@lavandev.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>workdealsolutions@gmail.com</span>
              </a>
              <a href="tel:+1234567890" className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+216 94 059 560</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`Connect on ${social.label}`}
                >
                  <i className={`${social.icon === 'envelope' ? 'fas' : 'fab'} fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Lavandev. All rights reserved.</p>
          </div>
          <div className="footer-credit">
            <p>Built with <span className="heart">❤</span> using React</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
