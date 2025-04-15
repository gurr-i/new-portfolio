export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'Python', 'JavaScript', 'C++', 'PHP', 'Dart', 'Shell']
  },
  {
    title: 'Databases',
    skills: ['SQLite3', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Drizzle', 'Supabase']
  },
  {
    title: 'Tools',
    skills: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome', 'Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'Jenkins']
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Vue', 'Flask', 'Express.js', 'Next.js', 'Django', 'NestJS', 'Spring Boot', 'bun']
  },
  {
    title: 'Other',
    skills: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja', 'GraphQL', 'WebSocket', 'gRPC', 'OAuth', 'JWT', 'WebAssembly', 'CI/CD']
  }
];
