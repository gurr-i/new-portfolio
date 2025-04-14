import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../hooks/useLanguage';

interface LanguageSelectorProps {
  mobile?: boolean;
}

const LanguageSelector = ({ mobile = false }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (lang: 'EN' | 'UA' | 'RU') => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  if (mobile) {
    return (
      <>
        <button 
          className={`px-2 py-1 text-sm ${language === 'EN' ? 'text-white bg-primary rounded' : 'text-gray-300 hover:text-white hover:bg-secondary rounded'}`}
          onClick={() => handleLanguageChange('EN')}
        >
          EN
        </button>
        <button 
          className={`px-2 py-1 text-sm ${language === 'UA' ? 'text-white bg-primary rounded' : 'text-gray-300 hover:text-white hover:bg-secondary rounded'}`}
          onClick={() => handleLanguageChange('UA')}
        >
          UA
        </button>
        <button 
          className={`px-2 py-1 text-sm ${language === 'RU' ? 'text-white bg-primary rounded' : 'text-gray-300 hover:text-white hover:bg-secondary rounded'}`}
          onClick={() => handleLanguageChange('RU')}
        >
          RU
        </button>
      </>
    );
  }

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 py-2 text-gray-300 hover:text-white"
        onClick={toggleDropdown}
      >
        <span>{language}</span>
        <FiChevronDown className="h-4 w-4" />
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-card rounded-md shadow-xl z-20">
          <button 
            className={`block px-4 py-2 text-sm ${language === 'EN' ? 'text-primary' : 'text-gray-300'} hover:text-white hover:bg-secondary w-full text-left`}
            onClick={() => handleLanguageChange('EN')}
          >
            EN
          </button>
          <button 
            className={`block px-4 py-2 text-sm ${language === 'UA' ? 'text-primary' : 'text-gray-300'} hover:text-white hover:bg-secondary w-full text-left`}
            onClick={() => handleLanguageChange('UA')}
          >
            UA
          </button>
          <button 
            className={`block px-4 py-2 text-sm ${language === 'RU' ? 'text-primary' : 'text-gray-300'} hover:text-white hover:bg-secondary w-full text-left`}
            onClick={() => handleLanguageChange('RU')}
          >
            RU
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
