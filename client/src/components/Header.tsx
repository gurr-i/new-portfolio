import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-10 bg-background/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center h-16">
        <a
          href="#home"
          className="text-xl font-semibold md:hidden"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-primary">G</span>urveer
        </a>
        <nav className="hidden md:flex space-x-8 items-center ml-auto">
          <a
            href="#home"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "home" ? "active" : ""
            }`}
            onClick={() => scrollToSection("home")}
          >
            #home
          </a>
          <a
            href="#works"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "works" ? "active" : ""
            }`}
            onClick={() => scrollToSection("works")}
          >
            #works
          </a>
          <a
            href="#skills"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "skills" ? "active" : ""
            }`}
            onClick={() => scrollToSection("skills")}
          >
            #skills
          </a>
          <a
            href="#technologies"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "technologies" ? "active" : ""
            }`}
            onClick={() => scrollToSection("technologies")}
          >
            #technologies
          </a>
          <a
            href="#experience"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => scrollToSection("experience")}
          >
            #experience
          </a>
          <a
            href="#testimonials"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "testimonials" ? "active" : ""
            }`}
            onClick={() => scrollToSection("testimonials")}
          >
            #testimonials
          </a>
          <a
            href="#about-me"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "about-me" ? "active" : ""
            }`}
            onClick={() => scrollToSection("about-me")}
          >
            #about-me
          </a>
          <a
            href="#contacts"
            className={`hash-link py-2 text-gray-300 hover:text-white ${
              activeSection === "contacts" ? "active" : ""
            }`}
            onClick={() => scrollToSection("contacts")}
          >
            #contacts
          </a>
          <LanguageSelector />
        </nav>
        <button
          className="md:hidden text-gray-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-card border-b border-gray-700 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <a
            href="#home"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("home");
              handleNavLinkClick();
            }}
          >
            #home
          </a>
          <a
            href="#works"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("works");
              handleNavLinkClick();
            }}
          >
            #works
          </a>
          <a
            href="#skills"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("skills");
              handleNavLinkClick();
            }}
          >
            #skills
          </a>
          <a
            href="#technologies"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("technologies");
              handleNavLinkClick();
            }}
          >
            #technologies
          </a>
          <a
            href="#experience"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("experience");
              handleNavLinkClick();
            }}
          >
            #experience
          </a>
          <a
            href="#testimonials"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("testimonials");
              handleNavLinkClick();
            }}
          >
            #testimonials
          </a>
          <a
            href="#about-me"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("about-me");
              handleNavLinkClick();
            }}
          >
            #about-me
          </a>
          <a
            href="#contacts"
            className="block py-2 text-gray-300 hover:text-white"
            onClick={() => {
              scrollToSection("contacts");
              handleNavLinkClick();
            }}
          >
            #contacts
          </a>
          <div className="py-2">
            <p className="text-gray-500 text-sm mb-1">Language</p>
            <div className="flex space-x-2">
              <LanguageSelector mobile={true} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
