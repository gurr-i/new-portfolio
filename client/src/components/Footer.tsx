import { FiGithub } from 'react-icons/fi';
import { RiLinkedinFill, RiInstagramLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-800 py-8 ml-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-2">G</div>
              <span className="text-lg font-semibold">Gurveer</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">Web designer and front-end developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 mb-2">© 2025 All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <RiLinkedinFill className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <RiInstagramLine className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
