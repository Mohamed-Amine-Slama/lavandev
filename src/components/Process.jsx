import React from 'react';
import { motion } from 'framer-motion';
import '../style/Process.css';

const Process = () => {
  const steps = [
    { num: '01', title: 'Discover', desc: 'We align on your goals, constraints, and timeline.' },
    { num: '02', title: 'Architect', desc: 'We design the system before writing a single line.' },
    { num: '03', title: 'Engineer', desc: 'We build with precision, tests, and clean commits.' },
    { num: '04', title: 'Harden', desc: 'We audit, pen-test, and optimize before delivery.' },
    { num: '05', title: 'Launch', desc: 'We deploy, monitor, and support after go-live.' },
  ];

  return (
    <section className="process-section" id="process">
      <div className="section-container">
        <div className="process-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How we work
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
          >
            No surprises. Just clean code and clear communication.
          </motion.p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="step-marker">
                <span className="step-number">{step.num}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
