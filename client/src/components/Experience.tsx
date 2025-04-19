import Timeline, { TimelineItem } from './Timeline';
import { FiArrowRight } from 'react-icons/fi';
import ScrollAnimation from './ScrollAnimation';
import { FloatingSquare, FloatingCircle, FloatingDiamond } from './DecorativeElements';
import { motion, useScroll, useTransform } from 'framer-motion';
import { parallaxVariants, revealVariants } from '../lib/animations';
import { BASE_URL } from '../lib/constants';

const experienceItems: TimelineItem[] = [
  {
    id: 1,
    date: '2022 - Present',
    title: 'Businsess Development',
    subtitle: 'Cogoport',
    description: 'Drove business growth through strategic client partnerships and market expansion. Developed and executed successful business strategies resulting in 40% revenue growth.',
    tags: ['Business Strategy', 'Client Relations', 'Market Analysis', 'Growth']
  },
  {
    id: 2,
    date: '2021 - 2022',
    title: 'Backend Developer',
    subtitle: 'Woovly',
    description: 'Architected and maintained robust backend systems using Node.js and MySQL. Implemented RESTful APIs and optimized database performance for scalability.',
    tags: ['Node.js', 'MySQL', 'REST APIs', 'Database Design']
  },
  {
    id: 3,
    date: '2022 - 2023',
    title: 'Junior Web Developer',
    subtitle: 'Techsellence',
    description: 'Developed and maintained client websites with responsive design principles. Implemented frontend features using HTML, CSS, and JavaScript while ensuring cross-browser compatibility.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    date: '2019 - 2023',
    title: 'Engineering Physics',
    subtitle: 'Indian institue of technology, Roorkee, Uttrakhand',
    description: 'Bachelor\'s degree in Engineering Physics with focus on quantum mechanics and advanced mathematics. Developed strong analytical and problem-solving skills.',
    tags: ['Physics', 'Mathematics', 'Research', 'Analytics']
  }
];

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="experience" className="py-20 relative theme-transition">
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      {/* Decorative floating elements */}
      <FloatingSquare 
        className="hidden md:block" 
        style={{ top: '15%', right: '8%', width: '40px', height: '40px', animationDelay: '0.2s' }} 
      />
      <FloatingCircle 
        className="hidden md:block" 
        style={{ bottom: '25%', left: '12%', width: '50px', height: '50px', animationDelay: '1.2s' }} 
      />
      <FloatingDiamond 
        className="hidden md:block" 
        style={{ top: '35%', left: '6%', width: '35px', height: '35px', animationDelay: '0.9s' }} 
      />
      
      {/* Additional floating border elements */}
      <div className="absolute hidden md:block border-r border-t border-primary w-32 h-32 theme-transition animate-float" 
        style={{ top: '20%', left: '15%', opacity: 0.4, animationDelay: '1.5s' }}
      />
      <div className="absolute hidden md:block border-l border-b border-primary w-32 h-32 theme-transition animate-float" 
        style={{ bottom: '10%', right: '10%', opacity: 0.4, animationDelay: '0.7s' }}
      />
      
      <motion.div 
        className="container mx-auto px-4 md:px-8 lg:px-16"
        style={{ y }}
      >
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-semibold theme-transition">
              <span className="text-primary theme-transition">#</span>experience
            </h2>
            <a 
              href='../new-portfolio/assets/cv.pdf'
              download="resume.pdf"
              className="text-sm text-gray-300 hover:text-white flex items-center theme-transition"
            >
              Download CV
              <FiArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          
          <p className="text-gray-400 mb-12 theme-transition">My professional journey</p>
        </motion.div>
        
        <motion.div className="mt-6">
          <Timeline items={experienceItems} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;