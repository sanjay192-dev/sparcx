import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Ready to Start Your Project?
        </motion.h2>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
        >
          Let's bring your innovative ideas to life. Contact us today to discuss your project and discover how Sparcx Solutions can help you achieve your digital goals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
