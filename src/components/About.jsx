import React from 'react';
import { motion } from 'framer-motion';
import '../style/About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <motion.h2 
          className="section-title text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Who we are
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              We are a small team of engineers who care deeply about
              the craft. No bloat, no middlemen, just focused people
              building things that work.
            </p>
            <p>
              We believe security is not a feature, it's a foundation.
              Every system we ship is designed to perform under load
              and resist attack from day one.
            </p>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-body">
                <div className="command-line">
                  <span className="prompt">$</span> lavandev --init your-project
                </div>
                <div className="output success">✓ Secure config loaded</div>
                <div className="output success">✓ CI/CD pipeline ready</div>
                <div className="output success">✓ Ready to ship</div>
                <div className="command-line">
                  <span className="prompt blinking">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
