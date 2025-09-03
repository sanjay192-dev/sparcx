import React from 'react';
import { motion } from 'framer-motion';
import heroIllustration from '../assets/images/hero-illustration.svg'; // Import the SVG

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We Build Modern, Scalable Web Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Sparcx Solutions, we transform innovative ideas into robust, scalable, and intuitive digital experiences. Our dedicated team of full-stack experts meticulously engineers every layer – from powerful backend APIs to captivating user interfaces – ensuring precision, performance, and reliability.
          </motion.p>
          <motion.button
            className="btn btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </div>
        <motion.div
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 100 }}
        >
          <img src={heroIllustration} alt="Team working on web solutions" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
