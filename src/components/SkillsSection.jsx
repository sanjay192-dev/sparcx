import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5 & CSS3', level: 98 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'Django', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Python', level: 85 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 70 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Cloudinary', level: 80 },
      { name: 'AWS (Basic)', level: 65 },
      { name: 'Git & GitHub', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const categoryVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="skills-section" ref={ref}>
      <div className="container">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Our Skills & Expertise
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
        >
          Our team possesses a diverse range of technical skills, enabling us to deliver comprehensive and robust solutions across various domains.
        </motion.p>
        <motion.div
          className="skills-grid"
          variants={categoryVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsData.map((skillCategory, index) => (
            <motion.div className="skill-category" key={index} variants={categoryVariants}>
              <h2>{skillCategory.category}</h2>
              <div className="skill-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <motion.div className="skill-item" key={skillIndex} variants={skillItemVariants}>
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{ width: isInView ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
