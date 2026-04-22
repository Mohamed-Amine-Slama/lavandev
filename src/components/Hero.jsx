import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Terminal, Code2, Cpu } from "lucide-react"
import useMobile from "../hooks/useMobile"
import "../style/Hero.css"

const Hero = () => {
  const heroRef = useRef(null);
  const isMobile = useMobile(768);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Variables for cleanup
    let codeElements, matrixRain, circuitPattern, scanLine;

    if (!isMobile) {
      // Add matrix rain effect
      const createMatrixRain = () => {
        const rain = document.createElement('div');
        rain.className = 'matrix-column';
        rain.style.left = `${Math.random() * 100}%`;
        rain.style.animationDuration = `${Math.random() * 2 + 1}s`;
        rain.innerText = '10'.repeat(30);
        return rain;
      };

      // Add floating code elements
      const codeSnippets = [
        '<div>', '</div>', 'const', 'function()', 
        'return', 'import React', 'export default',
        '{ }', '=> {}', 'useState', 'useEffect'
      ];

      const createCodeElement = () => {
        const element = document.createElement('div');
        element.className = 'code-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 2}s`;
        element.innerText = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        return element;
      };

      codeElements = document.createElement('div');
      codeElements.className = 'code-elements';
      // Reduce the number of elements dramatically for performance
      for (let i = 0; i < 15; i++) {
        codeElements.appendChild(createCodeElement());
      }

      matrixRain = document.createElement('div');
      matrixRain.className = 'matrix-rain';
      // Reduce raining columns for performance
      for (let i = 0; i < 30; i++) {
        matrixRain.appendChild(createMatrixRain());
      }

      heroElement.appendChild(codeElements);
      heroElement.appendChild(matrixRain);

      // Add circuit pattern
      circuitPattern = document.createElement('div');
      circuitPattern.className = 'circuit-pattern';
      heroElement.appendChild(circuitPattern);

      // Add scanning line
      scanLine = document.createElement('div');
      scanLine.className = 'scan-line';
      heroElement.appendChild(scanLine);
    }

    // Simplified mouse move effect ONLY on desktop
    const handleMouseMove = (e) => {
      if (isMobile) return;
      const { left, top, width, height } = heroElement.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const content = heroElement.querySelector('.hero-content');
      if (content) {
        content.style.transform = 
          `perspective(1000px) 
           rotateY(${x * 5}deg) 
           rotateX(${-y * 5}deg)
           translateZ(20px)`;
      }
    };

    const handleMouseLeave = () => {
      if (isMobile) return;
      const content = heroElement.querySelector('.hero-content');
      if (content) {
        content.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
      }
    };

    if (!isMobile) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (!isMobile) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      // Cleanup dynamically added DOM elements
      if (codeElements && heroElement.contains(codeElements)) heroElement.removeChild(codeElements);
      if (matrixRain && heroElement.contains(matrixRain)) heroElement.removeChild(matrixRain);
      if (circuitPattern && heroElement.contains(circuitPattern)) heroElement.removeChild(circuitPattern);
      if (scanLine && heroElement.contains(scanLine)) heroElement.removeChild(scanLine);
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-wrapper">
        <motion.div 
          className="hero-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="code-block">{"<Hero>"}</div>
          <div className="code-block">{"const agency = {\n  name: 'Lavandev',\n  role: 'Development Company'"}</div>
          <div className="code-block">{"function buildFuture() {\n  return 'Amazing Web Apps'\n}"}</div>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="tech-icons">
              <Terminal className="tech-icon" size={32} />
              <Code2 className="tech-icon" size={32} />
              <Cpu className="tech-icon" size={32} />
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              &lt;Lavandev_Agency /&gt;
            </motion.h1>

            <motion.div variants={itemVariants} className="hero-subtitle">
              <div className="typing-container">
                <span className="typing-text">
                  We engineer the web. Securely. Relentlessly.
                </span>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="hero-description">
              A dedicated development company passionate about web development, engineering, and cybersecurity. Specialized in modern frameworks and scalable systems.
            </motion.p>

            <motion.div variants={itemVariants} className="button-container">
              <motion.a
                href="#contact"
                className="button primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GET IN TOUCH
              </motion.a>
              <motion.a
                href="#projects"
                className="button secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW PROJECTS
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="social-links">
              {[
                { icon: Github, href: "https://github.com/Lavandev" },
                { icon: Linkedin, href: "https://linkedin.com/company/lavandev" },
                { icon: Mail, href: "mailto:contact@lavandev.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  whileHover={{ y: -3, color: "#00f2fe" }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <div className="code-block">{"</Hero>"}</div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

