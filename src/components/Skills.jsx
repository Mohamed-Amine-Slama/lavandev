import React from "react"
import { motion } from "framer-motion"
import { Code, Server, Database, PenToolIcon as Tool } from "lucide-react"
import "../style/Skills.css"

const skills = [
  {
    category: "Languages",
    icon: Code,
    items: [
      { name: "JavaScript/ES6+", level: 90 },
      { name: "Python", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "Assembly/VHDL", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: Server,
    items: [
      { name: "React / Redux", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Angular", level: 75 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    category: "Cybersecurity & Networks",
    icon: Database,
    items: [
      { name: "Kali Linux / Burp Suite", level: 85 },
      { name: "Wireshark", level: 80 },
      { name: "Network Security", level: 85 },
      { name: "Penetration Testing", level: 80 },
      { name: "Protocol Analysis", level: 85 },
    ],
  },
  {
    category: "Tools & Environments",
    icon: Tool,
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 85 },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  return (
    <section className="tech-skills-section" id="skills">
      <div className="tech-skills-decoration">
        <div className="modern-blob blob-1"></div>
        <div className="modern-blob blob-2"></div>
      </div>
      <div className="tech-skills-container">
        <motion.div 
          className="section-header-centered"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="tech-skills-title">Core Competencies</h2>
        </motion.div>
        <motion.div 
          className="tech-skills-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="tech-skill-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="tech-skill-header">
                <skillGroup.icon size={28} className="tech-skill-icon" />
                <h3 className="tech-skill-category">{skillGroup.category}</h3>
              </div>
              <div className="tech-skill-list">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="tech-skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
                  >
                    <div className="tech-skill-info">
                      <span className="tech-skill-name">{skill.name}</span>
                      <span className="tech-skill-level">
                        {skill.level}
                        {"%"}
                      </span>
                    </div>
                    <div className="tech-skill-bar">
                      <motion.div
                        className="tech-skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

