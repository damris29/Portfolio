'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { projectsData, projectCategories, Project } from '@/data/projects';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary-400/30">{project.title[0]}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        {project.featured && (
          <Badge variant="accent" className="absolute top-3 right-3">
            Featured
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="default" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="default" className="text-xs">
              +{project.techStack.length - 3}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-muted hover:bg-primary-500/20 text-muted-foreground hover:text-primary-400 transition-all"
              aria-label="View GitHub"
            >
              <FiGithub className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-lg bg-muted hover:bg-primary-500/20 text-muted-foreground hover:text-primary-400 transition-all"
              aria-label="View Live Demo"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="h-48 bg-gradient-to-br from-primary-500/30 to-accent-500/30 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background text-foreground transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5" />
          </button>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-primary-400/30">{project.title[0]}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              {project.featured && <Badge variant="accent">Featured</Badge>}
            </div>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {/* Problem */}
          <div>
            <h3 className="font-semibold text-primary-400 mb-2">🔍 The Problem</h3>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="font-semibold text-accent-400 mb-2">💡 The Solution</h3>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>

          {/* Learnings */}
          <div>
            <h3 className="font-semibold text-green-400 mb-2">📚 What I Learned</h3>
            <p className="text-muted-foreground">{project.learnings}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-border">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all"
              >
                <FiGithub className="mr-2 w-4 h-4" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-all"
              >
                <FiExternalLink className="mr-2 w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.categories.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and passion for building"
        />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
