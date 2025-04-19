import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Technologies from "./components/Technologies";
import ThemeToggler from "./components/ThemeToggler";
import ThemeCustomizer from "./components/ThemeCustomizer";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "./hooks/useLanguage";
import { ThemeProvider } from "./hooks/useTheme";
import {
  fadeUpVariants,
  staggerContainer,
  sectionTransitionVariants,
  scrollProgressVariants,
} from "./lib/animations";

import CustomCursor from "./components/CustomCursor";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const mainRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.clientHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomCursor />
        <motion.div
          className="min-h-screen flex flex-col bg-background text-foreground font-mono"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Sidebar />
          <Header activeSection={activeSection} />

          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
            style={{ scaleX }}
            variants={scrollProgressVariants}
          />
          <motion.main
            ref={mainRef}
            className="flex-grow pt-16 ml-16 relative"
            variants={fadeUpVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial="exit"
                animate="enter"
                exit="exit"
                variants={sectionTransitionVariants}
              >
                <Hero />
                <Quote />
                <Projects />
                <Skills />
                <Technologies />
                <Experience />
                <Testimonials />
                <About />
                <Contact />
              </motion.div>
            </AnimatePresence>
          </motion.main>

          <Footer />
          {/* <ThemeToggler /> */}
          <ThemeCustomizer />
          <Toaster />
        </motion.div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
