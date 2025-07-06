import React from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import "../style/Diplomas.css"

const diplomas = [
  {
    title: "Master's Degree in Computer Science",
    institution: "University of Technology",
    year: "2022",
    category: "Degree",
    fileUrl: "/path-to-diploma1.pdf",
    thumbnail: "/path-to-thumbnail1.jpg",
  },
  {
    title: "Web Development Certification",
    institution: "Tech Academy",
    year: "2022",
    category: "Certificate",
    fileUrl: "/path-to-diploma2.pdf",
    thumbnail: "/path-to-thumbnail2.jpg",
  },
  {
    title: "Advanced JavaScript Course",
    institution: "Coding Institute",
    year: "2021",
    category: "Certificate",
    fileUrl: "/path-to-diploma3.pdf",
    thumbnail: "/path-to-thumbnail3.jpg",
  },
  {
    title: "React Development Specialist",
    institution: "Modern Web Academy",
    year: "2021",
    category: "Certificate",
    fileUrl: "/path-to-diploma4.pdf",
    thumbnail: "/path-to-thumbnail4.jpg",
  },
  {
    title: "Database Management Systems",
    institution: "Data Science Institute",
    year: "2021",
    category: "Certificate",
    fileUrl: "/path-to-diploma5.pdf",
    thumbnail: "/path-to-thumbnail5.jpg",
  },
  {
    title: "Cloud Computing Fundamentals",
    institution: "Cloud Academy",
    year: "2020",
    category: "Certificate",
    fileUrl: "/path-to-diploma6.pdf",
    thumbnail: "/path-to-thumbnail6.jpg",
  },
  {
    title: "Cybersecurity Essentials",
    institution: "Security Institute",
    year: "2020",
    category: "Certificate",
    fileUrl: "/path-to-diploma7.pdf",
    thumbnail: "/path-to-thumbnail7.jpg",
  },
  {
    title: "Mobile App Development",
    institution: "App Academy",
    year: "2020",
    category: "Certificate",
    fileUrl: "/path-to-diploma8.pdf",
    thumbnail: "/path-to-thumbnail8.jpg",
  },
  {
    title: "UI/UX Design Principles",
    institution: "Design School",
    year: "2019",
    category: "Certificate",
    fileUrl: "/path-to-diploma9.pdf",
    thumbnail: "/path-to-thumbnail9.jpg",
  },
  {
    title: "Bachelor's Degree in Computer Engineering",
    institution: "Tech Institute",
    year: "2019",
    category: "Degree",
    fileUrl: "/path-to-diploma10.pdf",
    thumbnail: "/path-to-thumbnail10.jpg",
  },
]

const Diplomas = () => {
  return (
    <section className="section" id="diplomas">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span style={{ color: '#ff79c6' }}>class</span>{" "}
          <span style={{ color: '#61dafb' }}>Credentials</span>{" "}
          <span style={{ color: '#50fa7b' }}>{`{`}</span>
        </motion.h2>
        <div className="diplomas-grid">
          {diplomas.map((diploma, index) => (
            <motion.div
              key={index}
              className="diploma-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="diploma-card-inner">
                <div className="diploma-card-front">
                  <div className="diploma-info">
                    <FileText className="diploma-icon" />
                    <div>
                      <h3 className="diploma-title">{diploma.title}</h3>
                      <p className="diploma-details">
                        {diploma.institution} • {diploma.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="diploma-card-back">
                  <img src={diploma.fileUrl} alt={`${diploma.title} Certificate`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ 
            color: '#50fa7b', 
            textAlign: 'right', 
            marginTop: '1rem',
            fontFamily: 'Fira Code, monospace'
          }}
        >
          {`}`}
        </motion.div>
      </div>
    </section>
  )
}

export default Diplomas

