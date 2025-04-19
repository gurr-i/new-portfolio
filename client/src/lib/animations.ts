import { Variants } from 'framer-motion';

// Fade up animation for sections
export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Scale animation for cards
export const scaleUpVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut'
        }
    }
};

// Slide in from side animation
export const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

// Hover scale animation
export const hoverScaleVariants: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
};

// Rotate animation
export const rotateVariants: Variants = {
    hidden: { opacity: 0, rotate: -20 },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

// Bounce animation
export const bounceVariants: Variants = {
    initial: { y: 0 },
    animate: {
        y: [-5, 0, -5],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Parallax scroll animation
export const parallaxVariants = (direction: 'up' | 'down' = 'up', intensity: number = 0.5): Variants => ({
    initial: { y: 0 },
    animate: (scrollProgress: number) => ({
        y: direction === 'up' ? scrollProgress * intensity : -scrollProgress * intensity,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
        }
    })
});

// Reveal on scroll animation
export const revealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9]
        }
    }
};

// Smooth section transition
export const sectionTransitionVariants: Variants = {
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.2
        }
    }
};

// Scroll progress animation
export const scrollProgressVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
};

// Floating animation with customizable parameters
export const floatingVariants = (duration: number = 3, y: number = 15): Variants => ({
    initial: { y: 0 },
    animate: {
        y: [-y, 0, -y],
        transition: {
            duration,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
});