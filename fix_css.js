const fs = require('fs');
let s = fs.readFileSync('src/style/Skills.css', 'utf8');

const regex = /\.tech-skills-decoration \{[\s\S]*\}[\s\S]*/;
const replacement = \.tech-skills-decoration {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.modern-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: -1;
  opacity: 0.15;
  animation: blob-float 15s infinite alternate ease-in-out;
}

.blob-1 {
  width: 400px;
  height: 400px;
  background: var(--primary);
  top: -10%;
  left: -10%;
}

.blob-2 {
  width: 500px;
  height: 500px;
  background: var(--secondary);
  bottom: -20%;
  right: -10%;
  animation-delay: -5s;
}

@keyframes blob-float {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(50px, 50px) scale(1.1);
  }
}

.section-header-centered {
  text-align: center;
  margin-bottom: 4rem;
}

.tech-skills-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 242, 254, 0.3));
  text-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
}

.tech-skills-subtitle {
  color: #a0aec0;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}
\;

s = s.replace(regex, replacement);
fs.writeFileSync('src/style/Skills.css', s);
