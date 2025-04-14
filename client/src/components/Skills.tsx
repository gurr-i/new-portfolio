import { skillGroups } from '../lib/skills';
import ScrollAnimation from './ScrollAnimation';
import { FloatingSquare, FloatingCircle, FloatingDiamond } from './DecorativeElements';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-card relative theme-transition">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      {/* Decorative floating elements */}
      <FloatingSquare 
        className="hidden md:block" 
        style={{ top: '10%', left: '5%', width: '42px', height: '42px' }} 
      />
      <FloatingCircle 
        className="hidden md:block" 
        style={{ top: '40%', right: '8%', width: '56px', height: '56px', animationDelay: '1.5s' }} 
      />
      <FloatingDiamond 
        className="hidden md:block" 
        style={{ bottom: '15%', left: '10%', width: '48px', height: '48px', animationDelay: '0.7s' }} 
      />
      
      {/* Additional floating border boxes */}
      <div className="absolute hidden md:block border-l border-b border-primary w-32 h-32 theme-transition animate-float" 
        style={{ top: '25%', left: '20%', opacity: 0.4, animationDelay: '1.8s' }}
      />
      <div className="absolute hidden md:block border-t border-r border-primary w-32 h-32 theme-transition animate-float" 
        style={{ bottom: '20%', right: '15%', opacity: 0.4, animationDelay: '0.3s' }}
      />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <ScrollAnimation type="fade-up">
          <h2 className="text-3xl font-semibold mb-12 theme-transition">
            <span className="text-primary theme-transition">#</span>skills
          </h2>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <ScrollAnimation 
              key={index} 
              type={index % 2 === 0 ? "fade-up" : "fade-down"} 
              delay={index * 100}
            >
              <div className="border border-gray-700 rounded-lg p-6 bg-background theme-transition hover:border-primary transition-all duration-300">
                <h3 className="text-xl font-medium mb-4 theme-transition">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-secondary text-gray-300 rounded text-sm theme-transition hover:bg-primary hover:bg-opacity-20 cursor-default transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        
        {/* Geometric Decoration */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimation type="fade-right" className="col-span-1 p-4">
            <div className="border border-primary w-32 h-32 relative theme-transition animate-pulse-slow">
              <div className="absolute w-32 h-32 border border-primary -top-4 -left-4 theme-transition"></div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-up" delay={200} className="col-span-1 p-4">
            <div className="dot-pattern opacity-30 h-64"></div>
          </ScrollAnimation>
          
          <ScrollAnimation type="fade-left" className="col-span-1 p-4">
            <div className="border border-primary w-32 h-32 ml-auto relative theme-transition animate-float">
              <div className="absolute w-16 h-16 border border-primary -bottom-4 -right-4 theme-transition"></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
