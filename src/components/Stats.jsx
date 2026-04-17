import React from 'react';
import { motion } from 'framer-motion';
import '../style/Stats.css';

const Stats = () => {
  const stats = [
    { value: '15', label: 'Projects' },
    { value: '14', label: 'Satisfied clients' },
    { value: '< 1 day', label: 'Max response time' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="stats-section">
      <motion.div 
        className="stats-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div className="stat-block" variants={itemVariants}>
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
