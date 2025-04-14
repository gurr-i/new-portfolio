import React from 'react';

interface DecorativeElementProps {
  className?: string;
  style?: React.CSSProperties;
}

export const FloatingSquare: React.FC<DecorativeElementProps> = ({ 
  className = '',
  style
}) => {
  return (
    <div 
      className={`border border-primary rounded-md theme-transition animate-float-fast ${className}`}
      style={{ 
        width: '2rem', 
        height: '2rem', 
        position: 'absolute',
        opacity: 0.7,
        ...style 
      }}
    />
  );
};

export const FloatingCircle: React.FC<DecorativeElementProps> = ({ 
  className = '',
  style
}) => {
  return (
    <div 
      className={`border border-primary rounded-full theme-transition animate-float-slow animate-pulse-slow ${className}`}
      style={{ 
        width: '3rem', 
        height: '3rem', 
        position: 'absolute',
        opacity: 0.7,
        ...style,
        animationDelay: '0.5s'
      }}
    />
  );
};

export const FloatingDiamond: React.FC<DecorativeElementProps> = ({ 
  className = '',
  style
}) => {
  return (
    <div 
      className={`border border-primary theme-transition animate-float ${className}`}
      style={{ 
        width: '2.5rem', 
        height: '2.5rem', 
        position: 'absolute',
        opacity: 0.7,
        transform: 'rotate(45deg)',
        animationDelay: '1s',
        ...style 
      }}
    />
  );
};

export const GeometricDecoration: React.FC<DecorativeElementProps> = ({
  className = '',
  style
}) => {
  return (
    <div 
      className={`absolute pointer-events-none z-0 ${className}`}
      style={style}
    >
      <FloatingSquare style={{ top: '10%', left: '5%' }} />
      <FloatingCircle style={{ top: '40%', right: '10%' }} />
      <FloatingDiamond style={{ bottom: '15%', left: '15%' }} />
      
      {/* Border lines */}
      <div 
        className="border-t border-primary w-24 absolute theme-transition animate-pulse-slow"
        style={{ top: '20%', right: '15%', opacity: 0.5 }}
      />
      <div 
        className="border-l border-primary h-24 absolute theme-transition animate-pulse-slow"
        style={{ bottom: '25%', right: '25%', opacity: 0.5, animationDelay: '1.5s' }}
      />
      
      {/* Additional decorative elements */}
      <div 
        className="border border-primary absolute w-32 h-32 theme-transition animate-float-slow"
        style={{ bottom: '8%', right: '8%', opacity: 0.3 }}
      />
      <div 
        className="border-t border-r border-primary absolute w-40 h-40 theme-transition animate-float"
        style={{ top: '15%', left: '12%', opacity: 0.2, animationDelay: '0.8s' }}
      />
      <div 
        className="border-b border-l border-primary absolute w-24 h-24 theme-transition animate-float-fast"
        style={{ top: '45%', left: '30%', opacity: 0.3, animationDelay: '1.2s' }}
      />
    </div>
  );
};

// Glowing element for special highlights
export const GlowingElement: React.FC<DecorativeElementProps> = ({ 
  className = '',
  style
}) => {
  return (
    <div 
      className={`border border-primary rounded-full theme-transition animate-float animate-glow ${className}`}
      style={{ 
        width: '3rem', 
        height: '3rem', 
        position: 'absolute',
        opacity: 0.8,
        ...style
      }}
    />
  );
};

export default GeometricDecoration;