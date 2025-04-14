import { useState } from 'react';
import { FiSettings, FiX, FiCheck } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

// Preset cyberpunk colors
const cyberpunkColors = [
  '#c084fc', // Purple (Default)
  '#ec4899', // Pink
  '#3b82f6', // Blue
  '#10b981', // Green
  '#f59e0b', // Amber
];

// Preset minimal colors
const minimalColors = [
  '#6366f1', // Indigo
  '#8b5cf6', // Violet
  '#d946ef', // Fuchsia
  '#14b8a6', // Teal
  '#f97316', // Orange
];

// Preset retro colors
const retroColors = [
  '#f59e0b', // Amber
  '#d97706', // Yellow
  '#ea580c', // Orange
  '#dc2626', // Red
  '#e11d48', // Rose
];

const ThemeCustomizer = () => {
  const { theme, setTheme, primaryColor, setPrimaryColor, applyThemeChanges } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customColor, setCustomColor] = useState(primaryColor);

  // Get color presets based on current theme
  const getThemeColors = () => {
    switch (theme) {
      case 'cyberpunk':
        return cyberpunkColors;
      case 'minimal':
        return minimalColors;
      case 'retro':
        return retroColors;
      default:
        return cyberpunkColors;
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeChange = (newTheme: 'cyberpunk' | 'minimal' | 'retro') => {
    setTheme(newTheme);
    // Set a default color for the theme
    const themeColors = 
      newTheme === 'cyberpunk' 
        ? cyberpunkColors 
        : newTheme === 'minimal' 
          ? minimalColors 
          : retroColors;
    
    setPrimaryColor(themeColors[0]);
    setCustomColor(themeColors[0]);
    
    // Apply theme changes immediately
    setTimeout(() => applyThemeChanges(), 50);
  };

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    setCustomColor(color);
    
    // Apply theme changes immediately
    setTimeout(() => applyThemeChanges(), 50);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomColor(e.target.value);
  };

  const applyCustomColor = () => {
    setPrimaryColor(customColor);
    
    // Apply theme changes immediately
    setTimeout(() => applyThemeChanges(), 50);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleOpen}
        className="w-12 h-12 rounded-full bg-background border border-gray-700 flex items-center justify-center text-white shadow-lg hover:border-primary transition-colors theme-transition"
        aria-label="Theme settings"
      >
        <FiSettings className={`w-5 h-5 ${isOpen ? 'animate-spin' : ''}`} />
      </button>

      {/* Customizer Panel */}
      <div
        className={`absolute bottom-16 right-0 w-72 bg-background border border-gray-700 rounded-lg shadow-xl p-4 transform transition-all duration-300 theme-transition ${
          isOpen
            ? 'translate-y-0 opacity-100 visible'
            : 'translate-y-8 opacity-0 invisible'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold theme-transition">Customize Theme</h3>
          <button
            onClick={toggleOpen}
            className="text-gray-400 hover:text-white"
            aria-label="Close theme settings"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Theme Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2 theme-transition">Theme Style</label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleThemeChange('cyberpunk')}
              className={`px-3 py-2 rounded-md text-sm ${
                theme === 'cyberpunk'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              } transition-colors theme-transition`}
            >
              Cyberpunk
            </button>
            <button
              onClick={() => handleThemeChange('minimal')}
              className={`px-3 py-2 rounded-md text-sm ${
                theme === 'minimal'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              } transition-colors theme-transition`}
            >
              Minimal
            </button>
            <button
              onClick={() => handleThemeChange('retro')}
              className={`px-3 py-2 rounded-md text-sm ${
                theme === 'retro'
                  ? 'bg-primary text-white'
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              } transition-colors theme-transition`}
            >
              Retro
            </button>
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2 theme-transition">Primary Color</label>
          <div className="flex space-x-2 mb-3">
            {getThemeColors().map((color, index) => (
              <button
                key={index}
                onClick={() => handleColorChange(color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full transition-transform ${
                  primaryColor === color ? 'ring-2 ring-white scale-110' : 'hover:scale-105'
                }`}
                aria-label={`Theme color ${index + 1}`}
              >
                {primaryColor === color && (
                  <FiCheck className="text-white w-full h-full p-1.5" />
                )}
              </button>
            ))}
          </div>

          {/* Custom Color Picker */}
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="sr-only"
                id="custom-color-picker"
              />
              <label
                htmlFor="custom-color-picker"
                className="flex items-center cursor-pointer"
              >
                <span
                  className="block w-8 h-8 rounded-full border-2 border-gray-600"
                  style={{ backgroundColor: customColor }}
                ></span>
                <span className="ml-2 text-sm text-gray-400 theme-transition">Custom</span>
              </label>
            </div>
            <button
              onClick={applyCustomColor}
              className="px-3 py-1 bg-secondary hover:bg-gray-700 text-sm rounded-md text-gray-300 theme-transition"
              title="Apply custom color"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="text-xs text-gray-500 mt-2 theme-transition">
          Theme changes apply to all components instantly.
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;