import React from "react"
import { motion } from "framer-motion"
import { 
  GraduationCap, Award, Calendar, MapPin, Code, 
  Terminal, Brain 
} from "lucide-react"
import "../style/Education.css"

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    location: "Silicon Valley, CA",
    period: "2020 - 2022",
    achievements: [
      "Specialized in Advanced Algorithms and Machine Learning",
      "Research in Distributed Systems",
      "GPA: 3.9/4.0",
    ],
    techStack: ["Machine Learning", "Python", "TensorFlow", "Distributed Systems"],
    icon: Brain,
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "Tech Institute",
    location: "San Francisco, CA",
    period: "2016 - 2020",
    achievements: ["First Class Honors", "President of Computing Society", "Best Final Year Project Award"],
    techStack: ["C++", "Computer Architecture", "Algorithms", "OS"],
    icon: Terminal,
  },
]

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      },
    },
  }

  const cardVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      rotateX: -5,
      scale: 0.98
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 50
      }
    }
  }

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Code className="education-icon" size={24} />
          <span className="gradient-text">Educational Journey</span>
        </motion.h2>
        
        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="education-header">
                <GraduationCap className="education-icon" />
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <div className="education-details">
                    <span>
                      <MapPin size={16} /> {edu.location}
                    </span>
                    <span>
                      <Calendar size={16} /> {edu.period}
                    </span>
                  </div>
                </div>
              </div>
              
              <ul className="education-achievements">
                {edu.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10, color: "var(--primary)" }}
                  >
                    <Award size={16} />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="tech-stack">
                {edu.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-item"
                    whileHover={{ y: -2, scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Background Icon */}
              <edu.icon className="education-icon-bg" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education

