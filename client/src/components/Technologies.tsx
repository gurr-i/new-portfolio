import { FaReact, FaNodeJs, FaPython, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiVite, SiDjango, SiSqlite, SiThreedotjs, SiQt, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import ScrollAnimation from './ScrollAnimation';

interface Technology {
  name: string;
  icon: JSX.Element;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'frameworks';
  color: string;
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React', icon: <FaReact className="w-8 h-8" />, category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, category: 'frontend', color: '#F7DF1E' },
  { name: 'Three.js', icon: <SiThreedotjs className="w-8 h-8" />, category: 'frontend', color: '#000000' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, category: 'frontend', color: '#06B6D4' },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, category: 'backend', color: '#339933' },
  { name: 'Python', icon: <FaPython className="w-8 h-8" />, category: 'backend', color: '#3776AB' },
  { name: 'Django', icon: <SiDjango className="w-8 h-8" />, category: 'backend', color: '#092E20' },
  { name: 'Express', icon: <SiExpress className="w-8 h-8" />, category: 'backend', color: '#000000' },
  
  // Databases
  { name: 'SQLite', icon: <SiSqlite className="w-8 h-8" />, category: 'database', color: '#003B57' },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, category: 'database', color: '#47A248' },
  
  // Frameworks and Tools
  { name: 'Vite', icon: <SiVite className="w-8 h-8" />, category: 'tools', color: '#646CFF' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, category: 'frameworks', color: '#000000' },
  { name: 'Qt', icon: <SiQt className="w-8 h-8" />, category: 'frameworks', color: '#41CD52' },
];

const Technologies = () => {
  // Group technologies by category
  const groupedTechnologies = technologies.reduce<Record<string, Technology[]>>((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Databases',
    tools: 'Tools',
    frameworks: 'Frameworks'
  };

  return (
    <section id="technologies" className="py-20 relative theme-transition">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <ScrollAnimation type="fade-up">
          <h2 className="text-3xl font-semibold mb-6 theme-transition">
            <span className="text-primary theme-transition">#</span>technologies
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl theme-transition">
            Here are the technologies I work with to create modern, fast, and scalable applications.
          </p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 gap-8">
          {Object.entries(groupedTechnologies).map(([category, techs]) => (
            <ScrollAnimation key={category} type="fade-up" delay={200}>
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4 border-b border-gray-700 pb-2 theme-transition">
                  {categoryNames[category as keyof typeof categoryNames]}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {techs.map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex flex-col items-center p-4 bg-background rounded-lg border border-gray-700 hover:border-primary transition-all duration-300 theme-transition hover:-translate-y-1"
                    >
                      <div className="mb-3 text-primary theme-transition" style={{ color: tech.color }}>
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium theme-transition">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation type="fade-up" delay={300} className="mt-12">
          <div className="flex items-center justify-center">
            <div className="h-0.5 bg-primary w-16 mr-4 opacity-50 theme-transition"></div>
            <span className="text-gray-400 italic theme-transition">
              Always exploring new technologies
            </span>
            <div className="h-0.5 bg-primary w-16 ml-4 opacity-50 theme-transition"></div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Technologies;