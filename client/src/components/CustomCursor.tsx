import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isPointer, setIsPointer] = useState(false);

  const smoothX = useSpring(cursorX, {
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  });
  const smoothY = useSpring(cursorY, {
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
            hoveredElement.tagName.toLowerCase() === "a" ||
            computedStyle.cursor === "auto"
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          translateX: smoothX,
          translateY: smoothY,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          translateX: smoothX,
          translateY: smoothY,
          scale: isPointer ? 1.5 : 1,
        }}
      />
      <style>{`
  * {
    cursor: none !important;
  }

  .cursor-dot, .cursor-ring {
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    z-index: 2147483647;
  }

  .cursor-dot {
    width: 12px;
    height: 12px;
    background: hsl(var(--primary)) !important;
    border-radius: 50%;
  }

  .cursor-ring {
    width: 40px;
    height: 40px;
    border: 2px solid hsl(var(--primary)) !important;
    border-radius: 50%;
  }
`}</style>
    </>
  );
};

export default CustomCursor;
