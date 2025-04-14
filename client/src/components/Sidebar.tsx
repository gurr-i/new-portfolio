import { FiGithub } from "react-icons/fi";
import { RiLinkedinFill, RiCodepenFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 border-r border-gray-800 flex flex-col items-center py-6 z-10">
      <a href="#home" className="mb-auto">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
          E
        </div>
      </a>
      <div className="space-y-6">
        <a
          href="https://github.com/gurr-i"
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/gurveeer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <RiLinkedinFill className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-primary transition-colors"
          aria-label="Codepen"
        >
          <RiCodepenFill className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
