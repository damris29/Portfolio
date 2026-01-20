// Experience data for the portfolio
export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'internship' | 'project' | 'hackathon' | 'leadership' | 'community';
  achievements: string[];
  technologies?: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'internship-1',
    title: 'Software Engineering Intern',
    organization: 'Tech Company',
    location: 'Remote',
    period: 'Summer 2025',
    type: 'internship',
    achievements: [
      'Developed RESTful APIs serving 10,000+ daily requests',
      'Reduced database query time by 40% through optimization',
      'Collaborated with cross-functional team of 5 engineers',
      'Implemented automated testing with 90% code coverage',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 'hackathon-1',
    title: 'First Place Winner',
    organization: 'University Hackathon 2024',
    location: 'Campus',
    period: 'November 2024',
    type: 'hackathon',
    achievements: [
      'Led team of 4 to build AI-powered study assistant in 24 hours',
      'Implemented real-time voice transcription and summarization',
      'Pitched solution to panel of industry judges',
    ],
    technologies: ['Python', 'OpenAI API', 'React'],
  },
  {
    id: 'leadership-1',
    title: 'Technical Lead',
    organization: 'Computer Science Club',
    location: 'University',
    period: '2023 - Present',
    type: 'leadership',
    achievements: [
      'Organized weekly coding workshops for 50+ members',
      'Mentored 15 junior students in web development',
      'Led development of club website and member portal',
    ],
  },
  {
    id: 'project-1',
    title: 'Research Assistant',
    organization: 'AI Research Lab',
    location: 'University',
    period: 'Spring 2024',
    type: 'project',
    achievements: [
      'Assisted in NLP research project on sentiment analysis',
      'Processed and cleaned dataset of 100,000+ text samples',
      'Co-authored paper submitted to undergraduate research symposium',
    ],
    technologies: ['Python', 'PyTorch', 'HuggingFace'],
  },
  {
    id: 'community-1',
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    location: 'GitHub',
    period: '2023 - Present',
    type: 'community',
    achievements: [
      'Contributed bug fixes and features to 5+ repositories',
      'Authored documentation improvements used by 1,000+ developers',
      'Active participant in code reviews and discussions',
    ],
  },
];

export const experienceTypeLabels: Record<Experience['type'], string> = {
  internship: '💼 Internship',
  project: '🔬 Research',
  hackathon: '🏆 Hackathon',
  leadership: '👥 Leadership',
  community: '🌐 Community',
};
