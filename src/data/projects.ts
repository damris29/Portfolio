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
    title: 'UTP AI Assistant',
    description: 'An AI-powered chatbot accessible from web and mobile that helps university students with Q&A, campus navigation, CGPA calculation, and personalized AI advice.',
    problem: 'University students often struggle to find quick answers to common questions, navigate the campus, track their academic progress, and get timely guidance—especially outside of office hours when admin staff are unavailable.',
    solution: 'Built a cross-platform AI chatbot using Flutter and Dart that provides 24/7 assistance. The app features natural language Q&A for university-related queries, interactive campus directions with map integration, a CGPA calculator for academic planning, and AI-powered personalized advice for students.',
    learnings: 'Gained hands-on experience with Flutter cross-platform development, integrating AI/NLP APIs, implementing map and navigation features, building responsive UIs for both mobile and web, and handling state management in complex applications.',
    techStack: ['Dart', 'Flutter', 'Firebase', 'Google AI', 'Maps API'],
    categories: ['AI/ML', 'Mobile'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
  id: 'eco-sort',
  title: 'EcoSort',
  description: 'A prototype recycling management application that enables communities to collect recyclable items and earn monetary rewards based on item type and weight, promoting sustainable waste management.',
  problem: 'Many recyclable materials end up as waste due to the lack of an organized, accessible system for communities to collect, track, and send recyclables to proper recycling centers while being incentivized to do so.',
  solution: 'Developed a prototype application using Visual Basic Application (VBA) and MySQL to manage recyclable item collection. The system allows users to record recyclable items, calculates rewards based on item type and weight, and supports a middleman workflow to deliver collected items to recycling centers.',
  learnings: 'Gained hands-on experience in full stack development, database design and management with MySQL, implementing business logic and application functions in VBA, and collaborating on UI design to ensure a smooth and user-friendly experience.',
  techStack: ['Visual Basic Application (VBA)', 'MySQL'],
  categories: ['Sustainability', 'Full Stack', 'Database'],
  githubUrl: undefined,
  featured: false,
  },
  {
  id: 'budget-buddy',
  title: 'BudgetBuddy',
  description:
    'A desktop-based personal finance application designed to help users track expenses, manage budgets, and develop better financial habits through a simple and intuitive interface.',
  problem:
    'Many students and individuals struggle to manage their finances due to the lack of simple, easy-to-use budgeting tools, leading to poor spending awareness and ineffective budget planning.',
  solution:
    'Developed a JavaFX desktop application that allows users to record expenses, categorize spending, and monitor budget limits. The system provides spending summaries and basic financial insights to help users better understand and control their expenses.',
  learnings:
    'Gained experience in building desktop applications using Java and JavaFX, applying object-oriented programming principles, designing user-friendly interfaces, and managing application logic and user interactions.',
  techStack: ['Java', 'JavaFX', 'Scene Builder'],
  categories: ['Finance', 'Desktop Application', 'Software Engineering'],
  githubUrl: 'https://github.com/damris29/BudgetBuddy',
  featured: true,
  },
];

export const projectCategories = ['All', 'AI/ML', 'Full-Stack', 'Mobile'];
