import React from 'react';
import { motion } from 'framer-motion';
import '../style/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Delivered ahead of schedule and the app has been bulletproof ever since. Exactly what we needed.",
      name: "Youssef M.",
      role: "CTO at FinTrack"
    },
    {
      quote: "Their security audit found issues our own team had missed for months. Thorough and professional.",
      name: "Amira L.",
      role: "Founder at Vaultly"
    },
    {
      quote: "The API they built handles 50k daily requests without breaking a sweat. Outstanding engineering.",
      name: "Karim B.",
      role: "Lead Engineer at ShipFast"
    }
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
      },
    },
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What clients say
        </motion.h2>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="testimonial-card" variants={itemVariants}>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <span className="author-name">— {testimonial.name}</span>
                <span className="author-role">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
