import React from "react"
import { motion } from "framer-motion"
import { Code, Server, Database, PenToolIcon as Tool } from "lucide-react"
import "../style/Skills.css"

const skills = [
  {
    category: "Frontend Development",
    icon: Code,
    items: [
      { name: "React.js", level: 95 },
      { name: "JavaScript/ES6+", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Three.js/WebGL", level: 80 },
    ],
  },
  {
    category: "Backend Development",
    icon: Server,
    items: [
      { name: "Python", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 80 },
      { name: "WebSocket", level: 75 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: Database,
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
    ],
  },
  {
    category: "Development Tools",
    icon: Tool,
    items: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 85 },
      { name: "Jest/Testing", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Agile/Scrum", level: 85 },
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

const codePatterns = [
  "<div>", "</div>", "const", "let", "function()", "=>", "return", 
  "import", "export", "{}", "[]", "()", "useEffect", "useState"
];

const Skills = () => {
  return (
    <section className="tech-skills-section" id="skills">
      <div className="tech-skills-decoration">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="code-pattern"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {codePatterns[Math.floor(Math.random() * codePatterns.length)]}
          </div>
        ))}
      </div>
      <div className="tech-skills-container">
        <motion.h2
          className="tech-skills-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Technical Expertise
        </motion.h2>
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
              <div className="corner-decoration top-left" />
              <div className="corner-decoration top-right" />
              <div className="corner-decoration bottom-left" />
              <div className="corner-decoration bottom-right" />
              <div className="card-decoration">
                {`{${skillGroup.category.toLowerCase().replace(/\s+/g, '_')}}`}
              </div>
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

