import React, { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Github, ExternalLink, ArrowRight, Code, Terminal, Cpu } from "lucide-react"
import "../style/Projects.css"

const projects = [
  {
    title: "Advanced Task Manager",
    description: "A full-stack task management application built with React and Python Flask, featuring real-time updates and collaborative features.",
    tech: ["React", "Python", "Flask", "PostgreSQL", "WebSocket"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com",
  },
  {
    title: "Real-time Chat Application",
    description: "Secure messaging platform with real-time updates using WebSocket.",
    tech: ["JavaScript", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    live: "https://chat-app-demo.com",
  },
  {
    title: "System Monitor",
    description: "A C++ system monitoring tool for Linux systems.",
    tech: ["C++", "Linux", "Systems Programming"],
    github: "https://github.com/yourusername/system-monitor",
  },
]

const Particles = () => {
  return (
    <div className="particles">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Move useTransform outside the callback
  const backgroundTransform = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(0,242,254,0.1), rgba(4,7,20,0.95))`
  );

  const handleMouseMove = (event, index) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">Some things I've built</p>
        </motion.div>

        <motion.div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              {/* Add binary decoration */}
              <div className="binary-decoration">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.5,
                      repeat: Infinity,
                    }}
                  >
                    {Math.random().toString(2).slice(2, 10)}
                  </motion.span>
                ))}
              </div>
              <span className="project-index">#{String(index + 1).padStart(2, '0')}</span>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-title-wrapper">
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                  </div>
                  <div className="project-links">
                    <motion.a 
                      href={project.github} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      title="View Source Code"
                    >
                      <Github strokeWidth={2} />
                    </motion.a>
                    {project.live && (
                      <motion.a 
                        href={project.live} 
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        title="View Live Demo"
                      >
                        <ExternalLink strokeWidth={2} />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -3,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <Code className="tech-icon" size={14} />
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="card-backdrop" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="view-more"
          whileHover={{ x: 5 }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            View More Projects <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

