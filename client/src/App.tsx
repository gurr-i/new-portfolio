import { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Quote from './components/Quote';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import ThemeToggler from './components/ThemeToggler';
import ThemeCustomizer from './components/ThemeCustomizer';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from './hooks/useLanguage';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = section.clientHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground font-mono">
          <Sidebar />
          <Header activeSection={activeSection} />
          
          <main className="flex-grow pt-16 ml-16">
            <Hero />
            <Quote />
            <Projects />
            <Skills />
            <Technologies />
            <Experience />
            <Testimonials />
            <About />
            <Contact />
          </main>
          
          <Footer />
          {/* <ThemeToggler /> */}
          <ThemeCustomizer />
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
