import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../style/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Got a project?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            Let's make it bulletproof.
          </motion.p>
        </div>

        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your name" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="your@email.com" required className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us what you need" rows="3" required className="form-input form-textarea"></textarea>
            </div>
            <button type="submit" className="submit-button">
              SEND MESSAGE &rarr;
            </button>
          </form>
        </motion.div>

        <motion.div 
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, delay: 0.4 }}
        >
          <div className="social-links-footer">
            {[
              { icon: Github, href: "https://github.com/Lavandev" },
              { icon: Linkedin, href: "https://linkedin.com/company/lavandev" },
              { icon: Mail, href: "mailto:contact@lavandev.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon-footer"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
          <p className="copyright-text">
            © 2025 Lavandev Agency — Built with precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
