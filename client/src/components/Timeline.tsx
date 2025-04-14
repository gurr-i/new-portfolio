import { FC, useState, useRef, useEffect, useCallback } from 'react';

export type TimelineItem = {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set the first item as active by default
    if (items.length > 0 && activeItemId === null) {
      setActiveItemId(items[0].id);
    }
    
    // Force the timeline items to be visible immediately
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      item.classList.add('animate-in');
    });
  }, [items, activeItemId]);
  
  const handleItemClick = useCallback((id: number) => {
    setActiveItemId(id);
  }, []);
  
  return (
    <div ref={timelineRef} className="relative">
      {/* Center line */}
      <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 h-full w-px bg-gray-700 theme-transition" />
      
      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div 
            key={item.id}
            style={{ animationDelay: `${index * 150}ms` }}
            className="timeline-item relative transition-all duration-500 ease-out"
          >
            <div 
              className={`flex flex-col md:flex-row items-start md:items-center gap-x-4 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Date marker */}
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white md:absolute md:left-1/2 md:-ml-4 z-10 theme-transition">
                {index + 1}
              </div>
              
              {/* Content */}
              <div 
                className={`w-full md:w-[calc(50%-2rem)] mt-4 md:mt-0 pl-12 md:pl-0 ${
                  activeItemId === item.id ? 'bg-opacity-10 neon-border' : 'bg-opacity-0'
                } theme-transition`}
                onClick={() => handleItemClick(item.id)}
                role="button"
                tabIndex={0}
              >
                <div className="bg-card border border-gray-700 rounded-lg p-5 transition-all duration-300 hover:border-primary cursor-pointer theme-transition hover:shadow-md">
                  <span className="inline-block text-sm text-primary font-semibold mb-2 theme-transition">{item.date}</span>
                  <h3 className="text-lg font-medium mb-1 theme-transition">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-3 theme-transition">{item.subtitle}</p>
                  <p className="text-gray-300 text-sm theme-transition">{item.description}</p>
                  
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs px-2 py-1 bg-secondary text-gray-300 rounded theme-transition hover:bg-primary hover:bg-opacity-20 cursor-default transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;