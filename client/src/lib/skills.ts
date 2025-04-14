export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'Lua', 'Python', 'JavaScript', 'Go', 'Rust', 'Java', 'C++', 'PHP']
  },
  {
    title: 'Databases',
    skills: ['SQLite', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Drizzle', 'Supabase']
  },
  {
    title: 'Tools',
    skills: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome', 'Docker', 'Kubernetes', 'AWS', 'Vercel', 'Netlify', 'GitHub Actions', 'Jenkins']
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Vue', 'Flask', 'Express.js', 'Next.js', 'Nuxt', 'Svelte', 'Angular', 'Django', 'NestJS', 'Spring Boot']
  },
  {
    title: 'Other',
    skills: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja', 'GraphQL', 'WebSocket', 'gRPC', 'OAuth', 'JWT', 'WebAssembly', 'CI/CD']
  }
];
