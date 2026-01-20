// Skills data for the portfolio
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'SQL' },
      { name: 'Visual Basic'},
      { name: 'Tailwind'},
      { name: 'React'},
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git' },
      { name: 'AWS' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'VM' },
      { name: 'Wireshark'},
      { name: 'Oracle'},
      { name: 'JavaFX SceneBuilder'},
    ],
  },
  {
    title: 'Core CS Concepts',
    skills: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'OOP' },
      { name: 'System Design' },
      { name: 'Database Design' },
      { name: 'Machine Learning' },
    ],
  },
];
