import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const technologies = [
  { name: 'React.js', icon: '' },       // Cloudinary URL later
  { name: 'Node.js', icon: '' },
  { name: 'Express', icon: '' },
  { name: 'MongoDB', icon: '' },
  { name: 'Django', icon: '' },
  { name: 'Cloudinary', icon: '' },
  { name: 'Next.js', icon: '' },
  { name: 'PostgreSQL', icon: '' },
  { name: 'FastAPI', icon: '' },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="tech-stack-section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We work extensively with cutting-edge technologies like the MERN stack and Django to build fast, scalable, and secure platforms. Our cloud media processing is powered by Cloudinary, and we ensure every deployment is production-grade.
        </motion.p>
        <motion.div
          className="tech-icons"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {technologies.map((tech) => (
            <motion.div className="tech-item" key={tech.name} variants={itemVariants}>
              <img src={tech.icon} alt={tech.name} className="tech-icon" />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
