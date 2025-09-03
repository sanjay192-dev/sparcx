import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="services-section" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We specialize in transforming complex requirements into elegant, high-performing digital solutions. Whether you need an intuitive web dashboard, a robust SaaS platform, a dynamic e-commerce site, or a real-time application, we leverage cutting-edge technologies and best practices to deliver exceptional results.
        </motion.p>
        <motion.div
          className="service-cards"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="service-card" variants={itemVariants}>
            <h3>Web Dashboards</h3>
            <p>Intuitive and data-rich dashboards for effective monitoring and management.</p>
          </motion.div>
          <motion.div className="service-card" variants={itemVariants}>
            <h3>SaaS Platforms</h3>
            <p>Scalable and secure Software-as-a-Service solutions tailored to your business model.</p>
          </motion.div>
          <motion.div className="service-card" variants={itemVariants}>
            <h3>E-commerce Solutions</h3>
            <p>Engaging and high-converting online stores designed for growth.</p>
          </motion.div>
          <motion.div className="service-card" variants={itemVariants}>
            <h3>Real-time Applications</h3>
            <p>Interactive applications with instant data updates for dynamic user experiences.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
