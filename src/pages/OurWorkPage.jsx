import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const sampleProjects = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    description: 'A comprehensive redesign of a robust e-commerce platform, focusing on user experience and conversion optimization.',
    image: '', // Cloudinary URL will go here later
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    description: 'Developed an intuitive SaaS analytics dashboard for real-time data visualization and reporting.',
    image: '',
    technologies: ['Next.js', 'Express', 'PostgreSQL', 'Chart.js'],
    link: '#',
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'Built a high-performance real-time chat application with secure communication and rich media support.',
    image: '',
    technologies: ['React.js', 'Socket.IO', 'Node.js', 'Redis'],
    link: '#',
  },
  {
    id: 4,
    title: 'Custom CRM System',
    description: 'Designed and implemented a custom CRM system to streamline client management and sales processes.',
    image: '',
    technologies: ['Django', 'React.js', 'PostgreSQL'],
    link: '#',
  },
];

function OurWorkPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="our-work-page" ref={ref}>
      <div className="container">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Our Work & Projects
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
        >
          Explore some of our recent projects that showcase our expertise and dedication to crafting high-quality digital solutions.
        </motion.p>
        <motion.div
          className="project-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default OurWorkPage;
