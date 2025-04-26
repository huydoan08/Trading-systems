"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Firefly = ({
  index,
  centerX,
  centerY
}: {
  index: number;
  centerX: number;
  centerY: number;
}) => {
  const radius = 25;
  const angle = (index * (2 * Math.PI)) / 15;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  return (
    <motion.div
      className="absolute w-1.5 h-1.5 bg-green-400 dark:bg-blue-400 rounded-full"
      style={{
        boxShadow: "0 0 10px #60a5fa, 0 0 20px #60a5fa, 0 0 30px #60a5fa"
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        x: x - 5,
        y: y - 5,
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.1,
        ease: "easeInOut"
      }}
    />
  );
};

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if the cursor is over a clickable element
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "rgb(255, 202, 237)",  
          border: "2px solid rgb(233, 41, 169)"
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: 1.5
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 20,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 border-2 border-purple-600 dark:border-green-200 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 0.1
        }}
      />
      <div className="fixed top-0 left-0 pointer-events-none z-50">
        {[...Array(30)].map((_, index) => (
          <Firefly
            key={index}
            index={index}
            centerX={mousePosition.x}
            centerY={mousePosition.y}
          />
        ))}
      </div>
    </>
  );
};
