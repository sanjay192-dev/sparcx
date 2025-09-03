import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Lead Full-stack Developer',
    description: 'John is an expert in React and Node.js with a passion for building scalable web applications.',
    image: '', // Cloudinary URL will go here later
    linkedin: '#',
    portfolio: '#',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    description: 'Jane focuses on creating intuitive and visually appealing user interfaces that enhance user experience.',
    image: '',
    linkedin: '#',
    portfolio: '#',
  },
  {
    id: 3,
    name: 'Peter Jones',
    role: 'Backend Engineer',
    description: 'Peter specializes in designing and implementing robust and secure backend systems using Django and FastAPI.',
    image: '',
    linkedin: '#',
    portfolio: '#',
  },
  {
    id: 4,
    name: 'Alice Brown',
    role: 'DevOps Specialist',
    description: 'Alice ensures seamless deployment and infrastructure management, focusing on efficiency and automation.',
    image: '',
    linkedin: '#',
    portfolio: '#',
  },
];

function TeamPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="team-page" ref={ref}>
      <div className="container">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Our Talented Team
        </motion.h1>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
        >
          Meet the dedicated professionals behind Sparcx Solutions who are committed to delivering excellence.
        </motion.p>
        <motion.div
          className="team-grid"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TeamPage;
