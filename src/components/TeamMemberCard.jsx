import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className="team-member-card"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={member.image} alt={member.name} className="member-image" />
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-description">{member.description}</p>
        <div className="member-socials">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          {member.portfolio && (
            <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-briefcase"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
