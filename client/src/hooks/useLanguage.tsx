import { createContext, useContext, useState, ReactNode } from 'react';

// Language options
type Language = 'EN' | 'UA' | 'RU';

// Context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'EN',
  setLanguage: () => {},
});

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
