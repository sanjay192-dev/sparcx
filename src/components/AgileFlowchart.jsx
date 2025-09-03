import React from 'react';
import { motion } from 'framer-motion';

const AgileFlowchart = () => {
  return (
    <motion.div
      className="agile-flowchart"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h3>Our Agile Development Process</h3>
      <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Nodes */}
        <motion.rect
          x="50" y="100" width="120" height="50" rx="10" fill="#B3E5FC" stroke="#007bff" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        <motion.text
          x="110" y="130" textAnchor="middle" fontSize="16" fill="#343a40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >Discovery</motion.text>

        <motion.rect
          x="200" y="100" width="120" height="50" rx="10" fill="#BBDEFB" stroke="#007bff" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        />
        <motion.text
          x="260" y="130" textAnchor="middle" fontSize="16" fill="#343a40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.1 }}
        >Design</motion.text>

        <motion.rect
          x="350" y="100" width="120" height="50" rx="10" fill="#90CAF9" stroke="#007bff" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
        />
        <motion.text
          x="410" y="130" textAnchor="middle" fontSize="16" fill="#343a40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.3 }}
        >Develop</motion.text>

        <motion.rect
          x="500" y="100" width="120" height="50" rx="10" fill="#64B5F6" stroke="#007bff" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        <motion.text
          x="560" y="130" textAnchor="middle" fontSize="16" fill="#343a40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >Test</motion.text>

        <motion.rect
          x="650" y="100" width="120" height="50" rx="10" fill="#42A5F5" stroke="#007bff" strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />
        <motion.text
          x="710" y="130" textAnchor="middle" fontSize="16" fill="#343a40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        >Deploy</motion.text>

        {/* Arrows */}
        <motion.path d="M170 125 H200" stroke="#007bff" strokeWidth="2" markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
        <motion.path d="M320 125 H350" stroke="#007bff" strokeWidth="2" markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
        <motion.path d="M470 125 H500" stroke="#007bff" strokeWidth="2" markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        />
        <motion.path d="M620 125 H650" stroke="#007bff" strokeWidth="2" markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        />
        
        {/* Feedback loop */}
        <motion.path d="M710 150 V200 H110 V150" stroke="#007bff" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        />

        {/* Arrowhead definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#007bff" />
          </marker>
        </defs>
      </svg>
    </motion.div>
  );
};

export default AgileFlowchart;
