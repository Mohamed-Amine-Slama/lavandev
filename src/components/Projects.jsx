import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, ArrowRight, Code, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import "../style/Projects.css"

const projects = [
  {
    title: "ERPNext - Full Industrial Management",
    description: "Deployment and customization of a complete ERP system for a factory, covering inventory management, production, accounting, and HR.",
    tech: ["ERPNext", "Python", "JavaScript", "Industrial Management"],
    github: "https://github.com/Mohamed-Amine-Slama",
    images: [
      "/ERPNext/screenshot-1776016395435.png",
      "/ERPNext/screenshot-1776016420522.png",
      "/ERPNext/screenshot-1776016429175.png",
      "/ERPNext/screenshot-1776016439802.png",
      "/ERPNext/screenshot-1776016453235.png",
      "/ERPNext/screenshot-1776016466036.png",
      "/ERPNext/screenshot-1776016479574.png",
      "/ERPNext/screenshot-1776016491819.png",
      "/ERPNext/screenshot-1776273685650.png"
    ]
  },
  {
    title: "Full-Stack E-Learning Platform",
    description: "Complete web application for an online course academy, including authentication, course management, and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Full-Stack"],
    github: "https://github.com/Mohamed-Amine-Slama",
    images: [
      "/E-learning/screenshot-1776015509651.png",
      "/E-learning/screenshot-1776015587607.png",
      "/E-learning/screenshot-1776015604185.png",
      "/E-learning/screenshot-1776015620120.png",
      "/E-learning/screenshot-1776015630672.png",
      "/E-learning/screenshot-1776015661132.png",
      "/E-learning/screenshot-1776015675795.png"
    ]
  },
  {
    title: "Online Abaya Shop",
    description: "E-commerce website for a local abaya shop, featuring product listings, shopping cart, and secure checkout.",
    tech: ["React", "MongoDB", "RESTAPI", "Framer Motion"],
    github: "https://github.com/Mohamed-Amine-Slama",
    images: [
      "/Abaya/screenshot-1776006750218.png",
      "/Abaya/screenshot-1776006767919.png",
      "/Abaya/screenshot-1776006790135.png",
      "/Abaya/screenshot-1776006808491.png"
    ]
  },
  {
    title: "Tirik eDisplay Architectural Revolution",
    description: "Online platform for a digital signage company, showcasing their products and services with a focus on UX, and performance.",
    tech: ["React", "MySQL", "UX/UI Design", "Responsive Design"],
    github: "https://github.com/Mohamed-Amine-Slama",
    images: [
      "/Triki/screenshot-1776015911936.png",
      "/Triki/screenshot-1776015935196.png",
      "/Triki/screenshot-1776015952023.png",
      "/Triki/screenshot-1776015978022.png"
    ]
  },
  {
    title: "Bredl Skate Brand E-Commerce",
    description: "E-commerce website for a skate brand, focused on security, UX, and performance.",
    tech: ["Vue.js", "Security", "UX/UI Design", "Performance", "Creativity"],
    github: "https://github.com/Mohamed-Amine-Slama",
    images: [
      "/Bredl/Screenshot 2026-04-12 161807.png",
      "/Bredl/screenshot-1776006974894.png",
      "/Bredl/screenshot-1776006987155.png",
      "/Bredl/Screenshot 2026-03-29 212348.png",
      "/Bredl/screenshot-1776007003014.png",
      "/Bredl/screenshot-1776007015723.png",
      "/Bredl/screenshot-1776007030965.png"
    ]
  },
  {
    title: "VapeStore Manager Application (Private)",
    description: "User interface for a vape store application, focused on security, UX, and performance. We cannot display images due to security reasons.",
    tech: ["React", "Security", "UX/UI Design", "Performance"],
    github: "https://github.com/Mohamed-Amine-Slama",
    private: true,
    images: []
  },
  {
    title: "Barber Shop Management System",
    description: "User interface for a barber shop application, focused on security, UX, and performance.",
    tech: ["React", "Security", "UX/UI Design", "Performance"],
    github: "https://github.com/Mohamed-Amine-Slama",
    images: [
      "/BarberShop/screenshot-1776015152317.png",
      "/BarberShop/screenshot-1776015175126.png",
      "/BarberShop/screenshot-1776015206132.png",
      "/BarberShop/screenshot-1776015221640.png",
      "/BarberShop/screenshot-1776015239817.png"
    ]
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => 
      selectedProject && prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => 
      selectedProject && prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

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
              className="project-card clickable"
              onClick={() => openModal(project)}
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
              <div className="view-gallery-hint">
                <ImageIcon size={18} />
                <span>View Gallery</span>
              </div>
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
          <a href="https://github.com/Mohamed-Amine-Slama" target="_blank" rel="noopener noreferrer">
            View More Projects <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="project-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <div className="project-links">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="modal-gallery">
                {selectedProject.private ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', color: '#888' }}>
                    <h4 style={{ marginBottom: '10px' }}>Private Project</h4>
                    <p>We cannot display images due to security reasons.</p>
                  </div>
                ) : (
                  <>
                    <button className="gallery-nav prev" onClick={prevImage}>
                      <ChevronLeft size={32} />
                    </button>
                    <div className="gallery-image-container">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <button className="gallery-nav next" onClick={nextImage}>
                      <ChevronRight size={32} />
                    </button>
                    
                    <div className="gallery-indicators">
                      {selectedProject.images.map((_, idx) => (
                        <span
                          key={idx}
                          className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="modal-details">
                <p>{selectedProject.description}</p>
                <div className="project-tech">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      <Code className="tech-icon" size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

