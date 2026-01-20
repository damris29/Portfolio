'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { FiAward, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi';

const educationData = {
  degree: 'Bachelor of Science in Computer Science',
  university: 'Universiti Teknologi PETRONAS',
  location: 'Seri Iskandar, Perak',
  period: '2024 - 2027 (Expected)',
  currentStatus: '2nd Year, 2nd Semester',
  gpa: '3.6/4.0',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Database Systems',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Networks',
    'Software Engineering',
    'Discrete Mathematics',
  ],
  awards: [
    "Not yet"
  ],
};

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Education"
          subtitle="My academic background and achievements"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          {/* Main info */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl md:text-2xl font-bold">{educationData.degree}</h3>
                <Badge variant="accent">{educationData.currentStatus}</Badge>
              </div>
              <p className="text-lg text-primary-400 font-medium mb-2">{educationData.university}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-4 h-4" />
                  {educationData.location}
                </span>
                <span className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4" />
                  {educationData.period}
                </span>
              </div>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <div className="text-3xl font-bold gradient-text">{educationData.gpa}</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
          </div>

          {/* Coursework */}
          <div className="mb-8">
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FiBook className="w-5 h-5 text-primary-400" />
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge variant="primary">{course}</Badge>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FiAward className="w-5 h-5 text-amber-400" />
              Awards & Recognition
            </h4>
            <ul className="space-y-3">
              {educationData.awards.map((award, index) => (
                <motion.li
                  key={award}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                  {award}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
