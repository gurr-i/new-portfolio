import { createContext, ReactNode, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'cyberpunk' | 'minimal' | 'retro';
type ThemeColor = string;

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  primaryColor: ThemeColor;
  setPrimaryColor: (color: ThemeColor) => void;
  toggleDarkMode: () => void;
  isDarkMode: boolean;
  applyThemeChanges: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Predefined theme color palettes
const themeColors = {
  cyberpunk: {
    primary: '#c084fc', // Neon purple
    secondary: '#333',
    background: '#121212',
    foreground: '#f8f8f8',
    card: '#1e1e1e',
    muted: '#333',
    accent: '#c084fc',
    borderRadius: '0.375rem',
    fontFamily: '"Fira Code", monospace',
    textGlow: '0 0 5px',
    boxShadow: '0 0 10px',
    bgGradient: 'linear-gradient(to bottom right, rgba(192, 132, 252, 0.05), rgba(0, 0, 0, 0))',
    buttonStyle: 'border',
  },
  minimal: {
    primary: '#6366f1', // Indigo
    secondary: '#334155',
    background: '#0f172a',
    foreground: '#f8fafc',
    card: '#1e293b',
    muted: '#334155',
    accent: '#6366f1',
    borderRadius: '0.25rem',
    fontFamily: 'Inter, sans-serif',
    textGlow: 'none',
    boxShadow: '0 1px 3px',
    bgGradient: 'none',
    buttonStyle: 'solid',
  },
  retro: {
    primary: '#f59e0b', // Amber
    secondary: '#2a3f5e',
    background: '#0c122d',
    foreground: '#f5f5f5',
    card: '#162041',
    muted: '#2a3f5e',
    accent: '#f59e0b',
    borderRadius: '0.5rem',
    fontFamily: '"Space Mono", monospace',
    textGlow: '0 0 2px',
    boxShadow: '2px 2px 0px',
    bgGradient: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0) 10px)',
    buttonStyle: 'solid-border',
  }
};

// Convert hex to hsl for Tailwind CSS variables
const hexToHSL = (hex: string) => {
  // Remove the # from the beginning
  hex = hex.replace(/^#/, '');
  
  // Parse the RGB values
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;
  
  // Find the maximum and minimum values to calculate the lightness
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    
    h /= 6;
  }
  
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return `${h} ${s}% ${l}%`;
};

// Helper function to create a slightly darker or lighter color for hover states
const adjustColor = (hex: string, percent: number) => {
  hex = hex.replace(/^#/, '');
  
  // Parse RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Adjust values by percentage
  const adjustValue = (value: number) => {
    const adjusted = value + Math.floor(value * (percent / 100));
    return Math.min(255, Math.max(0, adjusted));
  };
  
  const newR = adjustValue(r);
  const newG = adjustValue(g);
  const newB = adjustValue(b);
  
  // Convert back to hex
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('cyberpunk');
  const [primaryColor, setPrimaryColor] = useState<ThemeColor>('#c084fc');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Apply all theme styles
  const applyThemeChanges = useCallback(() => {
    const colors = themeColors[theme];
    const themeProps = themeColors[theme];
    
    // Apply primary color in HSL format for Tailwind CSS
    document.documentElement.style.setProperty('--primary', hexToHSL(primaryColor));
    document.documentElement.style.setProperty('--accent', hexToHSL(primaryColor));
    document.documentElement.style.setProperty('--ring', hexToHSL(primaryColor));
    
    // Apply theme-specific CSS custom properties
    document.documentElement.style.setProperty('--theme-border-radius', themeProps.borderRadius);
    document.documentElement.style.setProperty('--theme-font-family', themeProps.fontFamily);
    document.documentElement.style.setProperty('--theme-text-glow', `${themeProps.textGlow} ${primaryColor}`);
    document.documentElement.style.setProperty('--theme-box-shadow', `${themeProps.boxShadow} ${primaryColor}40`);
    document.documentElement.style.setProperty('--theme-bg-gradient', themeProps.bgGradient);
    
    // Apply color variations
    document.documentElement.style.setProperty('--primary-hover', adjustColor(primaryColor, theme === 'retro' ? -15 : 10));
    document.documentElement.style.setProperty('--primary-transparent', `${primaryColor}20`);
    document.documentElement.style.setProperty('--primary-light', `${primaryColor}80`);
    
    // Apply light/dark mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    
    // Apply theme class
    document.documentElement.classList.remove('cyberpunk', 'minimal', 'retro');
    document.documentElement.classList.add(theme);
  }, [theme, primaryColor, isDarkMode]);
  
  useEffect(() => {
    // Load saved preferences from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
    const savedColor = localStorage.getItem('portfolio-color') as ThemeColor | null;
    const savedDarkMode = localStorage.getItem('portfolio-dark-mode');
    
    if (savedTheme) setTheme(savedTheme);
    if (savedColor) setPrimaryColor(savedColor);
    if (savedDarkMode !== null) setIsDarkMode(savedDarkMode === 'true');
  }, []);
  
  useEffect(() => {
    // Apply the theme when it changes
    applyThemeChanges();
    
    // Save preferences to localStorage
    localStorage.setItem('portfolio-theme', theme);
    localStorage.setItem('portfolio-color', primaryColor);
    localStorage.setItem('portfolio-dark-mode', isDarkMode.toString());
  }, [theme, primaryColor, isDarkMode, applyThemeChanges]);
  
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);
  
  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      primaryColor, 
      setPrimaryColor, 
      toggleDarkMode,
      isDarkMode,
      applyThemeChanges
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};