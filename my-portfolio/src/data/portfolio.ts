// src/data/portfolio.ts
export const personalInfo = {
  name: "Nama Lu",
  role: "Fullstack Developer",
  bio: "Passionate developer yang suka bikin aplikasi keren",
  email: "email@example.com",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "Full-stack e-commerce dengan React & Node.js",
    image: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/...",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Task Management",
    description: "Aplikasi manajemen tugas real-time",
    image: "/projects/taskapp.png",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/...",
    demo: "https://demo.com",
  },
  // Tambah project lainnya...
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Python", "FastAPI"],
  database: ["PostgreSQL", "MongoDB", "Redis"],
  tools: ["Git", "Docker", "AWS", "Vercel"],
};
