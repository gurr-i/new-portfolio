import { FiArrowRight } from "react-icons/fi";
import ScrollAnimation from "./ScrollAnimation";
import {
  FloatingSquare,
  FloatingCircle,
  FloatingDiamond,
  GlowingElement,
} from "./DecorativeElements";
import heroImage from "../assets/hero-image.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-16 lg:py-0 relative overflow-hidden theme-transition"
    >
      <div className="absolute inset-0 dot-pattern opacity-10"></div>

      {/* Decorative elements */}
      <FloatingSquare
        className="hidden md:block"
        style={{ top: "15%", left: "10%", width: "32px", height: "32px" }}
      />
      <FloatingCircle
        className="hidden md:block"
        style={{ top: "25%", right: "12%", width: "48px", height: "48px" }}
      />
      <FloatingDiamond
        className="hidden md:block"
        style={{ bottom: "20%", left: "15%", width: "36px", height: "36px" }}
      />
      <div
        className="absolute hidden md:block border-primary border-t w-32 h-32 theme-transition animate-float"
        style={{
          top: "30%",
          right: "25%",
          opacity: 0.5,
          animationDelay: "0.8s",
        }}
      />
      <div
        className="absolute hidden md:block border-primary border-r w-32 h-32 theme-transition animate-float"
        style={{
          bottom: "15%",
          right: "10%",
          opacity: 0.5,
          animationDelay: "1.2s",
        }}
      />
      <GlowingElement
        className="hidden md:block"
        style={{ top: "20%", left: "20%", width: "16px", height: "16px" }}
      />
      <GlowingElement
        className="hidden md:block"
        style={{
          bottom: "25%",
          right: "20%",
          width: "24px",
          height: "24px",
          animationDelay: "1s",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollAnimation
            type="fade-right"
            className="w-full lg:w-1/2 mb-10 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 theme-transition">
              Gurveer is a{" "}
              <span className="text-primary theme-transition">
                Full-Stack developer
              </span>{" "}
              and
              <br />
              <span className="text-primary theme-transition">Ml Engineer</span>
            </h1>
            <ScrollAnimation delay={200} type="fade-up">
              <p className="text-gray-400 mb-8 max-w-lg theme-transition">
                He crafts responsive websites and Proejcts where technologies
                meet Real-life problems and creativity
              </p>
            </ScrollAnimation>
            <ScrollAnimation delay={400} type="fade-up">
              <a
                href="#contacts"
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-dark hover:bg-opacity-10 transition-colors duration-300 rounded theme-transition"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact me!!
                <FiArrowRight className="ml-2" />
              </a>
            </ScrollAnimation>

            <ScrollAnimation delay={600} type="fade-up">
              <div className="mt-16 bg-card border border-gray-700 rounded p-4 max-w-lg theme-transition">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mr-2 theme-transition"></div>
                  <p className="text-sm text-gray-300 theme-transition">
                    Currently working on{" "}
                    <span className="font-medium text-white theme-transition">
                      QuizNexus Project
                    </span>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>

          <ScrollAnimation
            type="fade-left"
            delay={200}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Gurveer - Web Designer and Front-end Developer"
                className="rounded-lg w-full max-w-md mx-auto object-cover theme-transition"
                style={{ aspectRatio: "1/1" }}
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 dot-pattern opacity-30"></div>
              <div className="absolute -bottom-5 -left-5 border border-primary w-20 h-20 theme-transition animate-pulse-slow"></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
