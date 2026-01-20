'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { FiCode, FiCpu, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Full-Stack Development',
    description: 'Building end-to-end web applications with modern frameworks',
  },
  {
    icon: FiCpu,
    title: 'AI & Machine Learning',
    description: 'Exploring deep learning and intelligent systems',
  },
  {
    icon: FiDatabase,
    title: 'Data Engineering',
    description: 'Processing and analyzing large-scale datasets',
  },
  {
    icon: FiTrendingUp,
    title: 'Problem Solving',
    description: 'Tackling complex algorithmic challenges',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about who I am and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Computer Science Student at{' '}
              <span className="text-primary-400">Universiti Teknologi PETRONAS</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate Computer Science student with a deep interest in 
                software engineering, artificial intelligence, and data science. 
                Currently pursuing my degree with an expected graduation at the end of 2027.
              </p>
              <p>
                My journey in tech started with curiosity about how software shapes 
                our world. Today, I focus on building practical solutions that 
                combine elegant code with meaningful impact.
              </p>
            </div>

            {/* Key points */}
            <ul className="mt-6 space-y-2">
              {[
                '🎓 Pursuing B.S. in Computer Science',
                '💡 Focus on AI/ML and Full-Stack Development',
                '🚀 Seeking software engineering internships',
                '🌱 Always learning new technologies',
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary-500/50 transition-all"
              >
                <item.icon className="w-8 h-8 text-primary-400 mb-3" />
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
