import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AgileFlowchart from './AgileFlowchart';

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger when 30% of element is in view

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="about-us-section" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2>Why Choose Us?</h2>
          <p>
            Beyond just coding, we approach every project with a strategic product mindset and unwavering technical clarity. This means we don't just build features; we craft solutions that align with your business objectives and deliver measurable impact.
          </p>
          <p>
            Our full-stack expertise guarantees seamless integration across all project phases – from initial design and intuitive frontend development to powerful backend systems and flawless deployment. We ensure every component works in harmony to deliver a cohesive and high-performing product.
          </p>
          <p>
            Our client relationships are built on open communication, complete transparency, and a commitment to continuous iteration. We keep you informed at every stage, value your feedback, and adapt to evolving needs, ensuring a collaborative and successful journey.
          </p>
        </motion.div>

        <motion.div
          className="development-approach"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ ...sectionVariants.visible.transition, delay: 0.2 }}
        >
          <h2>Our Development Approach</h2>
          <p>
            Our agile development methodology is designed for efficiency, flexibility, and delivering value. From meticulously defined milestones and robust version control to thorough code reviews and automated testing, we ensure quality at every step.
          </p>
          <p>
            We build future-proof systems that are inherently cloud-deployable, modular, and designed for effortless scalability, providing long-term value and adaptability as your business grows. Our commitment extends beyond initial deployment; we create living solutions that continuously evolve and grow with your users' needs.
          </p>
          <motion.div
            className="agile-flowchart-placeholder"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
          >
            <AgileFlowchart />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
