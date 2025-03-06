export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Current Company",
    period: "2024 - Present",
    description: [
      "Frontend development using React.js and Next.js",
      "Building responsive and performant web applications",
      "Integration with backend services and APIs",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Previous Company",
    period: "2023 - 2024",
    description: [
      "Developed and maintained web applications",
      "Collaborated with cross-functional teams",
      "Implemented new features and improvements",
    ],
  },
  {
    title: "Intern/Trainee Developer",
    company: "First Company",
    period: "2022 - 2023",
    description: [
      "Learned and applied modern web development practices",
      "Assisted in development of various projects",
      "Gained hands-on experience with React.js",
    ],
  },
];
