import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldAlert, Server, Cloud } from 'lucide-react';
import '../style/Services.css';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Full-stack web apps built with modern frameworks — React, Next.js, Node.js, and more.',
    },
    {
      icon: ShieldAlert,
      title: 'Cybersecurity',
      description: 'Penetration testing, secure architecture, and code audits to keep your systems bulletproof.',
    },
    {
      icon: Server,
      title: 'API Engineering',
      description: 'High-performance, well-documented REST and GraphQL APIs designed to scale under pressure.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'CI/CD pipelines, containerization, and cloud infrastructure on AWS, GCP, or Azure.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What we build
        </motion.h2>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="service-card" variants={itemVariants}>
              <div className="service-icon-wrapper">
                <service.icon className="service-icon" size={32} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
