import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  hover = true,
  glass = false 
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`
        rounded-xl p-6
        ${glass 
          ? 'glass' 
          : 'bg-card border border-border'
        }
        ${hover ? 'cursor-pointer' : ''}
        transition-shadow duration-300
        hover:shadow-xl hover:shadow-primary-500/10
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
