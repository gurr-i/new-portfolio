import { useState } from 'react';
import { FiMoon, FiSun, FiSliders } from 'react-icons/fi';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTheme } from '../hooks/useTheme';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

const ThemeToggler = () => {
  const { theme, setTheme, primaryColor, setPrimaryColor, isDarkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  
  const predefinedColors = [
    { name: 'purple', value: '#c084fc' },
    { name: 'blue', value: '#60a5fa' },
    { name: 'green', value: '#4ade80' },
    { name: 'pink', value: '#f472b6' },
    { name: 'amber', value: '#fbbf24' },
    { name: 'red', value: '#f87171' },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed bottom-6 right-6 z-50 bg-card border-gray-700 text-gray-300 hover:text-white hover:bg-primary hover:bg-opacity-20"
        >
          <FiSliders className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-card border-gray-700" align="end">
        <div className="space-y-4">
          <h4 className="font-medium text-sm border-b border-gray-700 pb-2">Customize Theme</h4>
          
          <div>
            <h5 className="text-sm text-gray-400 mb-2">Theme</h5>
            <Tabs defaultValue={theme} onValueChange={(value) => setTheme(value as any)}>
              <TabsList className="grid grid-cols-3 h-9 bg-secondary">
                <TabsTrigger value="cyberpunk" className="text-xs py-1">Cyberpunk</TabsTrigger>
                <TabsTrigger value="minimal" className="text-xs py-1">Minimal</TabsTrigger>
                <TabsTrigger value="retro" className="text-xs py-1">Retro</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div>
            <h5 className="text-sm text-gray-400 mb-2">Primary Color</h5>
            <div className="grid grid-cols-6 gap-2">
              {predefinedColors.map((color) => (
                <button
                  key={color.value}
                  className={`w-8 h-8 rounded-full border-2 ${primaryColor === color.value ? 'border-white ring-2 ring-white/20' : 'border-transparent'}`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setPrimaryColor(color.value)}
                  aria-label={`Set theme color to ${color.name}`}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-sm text-gray-400 mb-2">Mode</h5>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <>
                  <FiMoon className="mr-2 h-4 w-4" />
                  Dark Mode
                </>
              ) : (
                <>
                  <FiSun className="mr-2 h-4 w-4" />
                  Light Mode
                </>
              )}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ThemeToggler;