'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 30 }, // Start invisible and slightly down
    visible: { opacity: 1, y: 0 }, // Fade in and slide up to its natural position
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: delay,
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;