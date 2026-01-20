// Project data for the portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  learnings: string;
  techStack: string[];
  categories: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'utp-ai-assistant',
    title: 'University AI Assistant',
    description: 'An AI-powered chatbot accessible from web and mobile that helps university students with Q&A, campus navigation, CGPA calculation, and personalized AI advice.',
    problem: 'University students often struggle to find quick answers to common questions, navigate the campus, track their academic progress, and get timely guidance—especially outside of office hours when admin staff are unavailable.',
    solution: 'Built a cross-platform AI chatbot using Flutter and Dart that provides 24/7 assistance. The app features natural language Q&A for university-related queries, interactive campus directions with map integration, a CGPA calculator for academic planning, and AI-powered personalized advice for students.',
    learnings: 'Gained hands-on experience with Flutter cross-platform development, integrating AI/NLP APIs, implementing map and navigation features, building responsive UIs for both mobile and web, and handling state management in complex applications.',
    techStack: ['Dart', 'Flutter', 'Firebase', 'Google AI', 'Maps API'],
    categories: ['AI/ML', 'Mobile'],
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export const projectCategories = ['All', 'AI/ML', 'Full-Stack', 'Mobile'];
