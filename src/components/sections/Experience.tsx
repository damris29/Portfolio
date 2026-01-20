'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { experienceData, experienceTypeLabels } from '@/data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Experience & Activities"
          subtitle="My journey through internships, projects, and community involvement"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary-500 border-4 border-background md:-translate-x-1/2 top-2" />

              {/* Content */}
              <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                <div className={`bg-card border border-border rounded-xl p-5 ${index % 2 === 0 ? '' : 'md:ml-auto'}`}>
                  {/* Type badge */}
                  <Badge variant="primary" className="mb-3">
                    {experienceTypeLabels[exp.type]}
                  </Badge>

                  {/* Header */}
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-primary-400 font-medium">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.location} • {exp.period}
                  </p>

                  {/* Achievements */}
                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex gap-2 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                        <span className="text-primary-400 flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className={`flex flex-wrap gap-1.5 mt-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
