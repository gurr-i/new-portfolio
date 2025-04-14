import { FiArrowRight } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { projects } from '../lib/projects';
import ScrollAnimation from './ScrollAnimation';
import { FloatingSquare, FloatingCircle, FloatingDiamond } from './DecorativeElements';

const Projects = () => {
  return (
    <section id="works" className="py-20 relative theme-transition">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      {/* Decorative floating elements */}
      <FloatingSquare 
        className="hidden md:block" 
        style={{ bottom: '20%', right: '5%', width: '45px', height: '45px', animationDelay: '0.5s' }} 
      />
      <FloatingCircle 
        className="hidden md:block" 
        style={{ top: '15%', left: '8%', width: '60px', height: '60px', animationDelay: '1.3s' }} 
      />
      <FloatingDiamond 
        className="hidden md:block" 
        style={{ top: '30%', right: '12%', width: '38px', height: '38px', animationDelay: '0.3s' }} 
      />
      
      {/* Additional floating border elements */}
      <div className="absolute hidden md:block border-primary border w-32 h-32 ml-auto theme-transition animate-float" 
        style={{ top: '10%', right: '20%', opacity: 0.3, animationDelay: '1.5s' }}
      />
      <div className="absolute hidden md:block border-primary border-t border-l w-32 h-32 theme-transition animate-float" 
        style={{ bottom: '15%', left: '7%', opacity: 0.3, animationDelay: '0.8s' }}
      />
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <ScrollAnimation type="fade-up">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-semibold theme-transition">
              <span className="text-primary theme-transition">#</span>projects
            </h2>
            <a href="#" className="text-sm text-gray-300 hover:text-white flex items-center theme-transition">
              View all
              <FiArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <p className="text-gray-400 mb-10 theme-transition">List of my projects</p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              type="fade-up" 
              delay={index * 100}
            >
              <ProjectCard project={project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
