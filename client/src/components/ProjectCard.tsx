import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { Project } from "../lib/projects";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, technologies, live, cached, github } = project;
  const { theme, primaryColor } = useTheme();
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      className="border border-gray-800 bg-card rounded-lg overflow-hidden card-hover theme-transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 bg-gray-900 relative overflow-hidden theme-transition">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent to-background/80 opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : ""
          }`}
        ></div>
      </div>
      <div className="p-6 theme-transition">
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-secondary text-gray-300 rounded theme-transition"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 theme-transition">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 theme-transition">
          {description}
        </p>
        <div className="flex space-x-3">
          {live && (
            <a
              href={live}
              className="inline-flex items-center text-sm border border-primary text-primary px-3 py-1 rounded hover:bg-primary hover:bg-opacity-10 transition-colors theme-transition"
            >
              Live
              <FiArrowRight className="h-3 w-3 ml-1" />
            </a>
          )}
          {cached && (
            <a
              href={cached}
              className="inline-flex items-center text-sm border border-gray-700 text-gray-300 px-3 py-1 rounded hover:text-white hover:border-gray-500 transition-colors theme-transition"
            >
              Cached
              <FiChevronRight className="h-3 w-3 ml-1" />
            </a>
          )}
          {github && (
            <a
              href={github}
              className="inline-flex items-center text-sm border border-primary text-primary px-3 py-1 rounded hover:bg-primary hover:bg-opacity-10 transition-colors theme-transition"
            >
              Github
              <FiArrowRight className="h-3 w-3 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
