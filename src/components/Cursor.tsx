"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Snowflake, Pointer, MousePointer } from "lucide-react";

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
  const [snowflakePosition, setSnowflakePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setSnowflakePosition({ x: e.clientX - 12, y: e.clientY - 12 });

      // Check if the cursor is over a clickable element or checkbox
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "input" && target.getAttribute("type") === "checkbox"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: 1.5
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 20,
          mass: 0.1
        }}
      >
        {isPointer ? (
          <Pointer className="w-4 h-4 text-red-600 dark:text-green-600" />
        ) : (
          <MousePointer className="w-4 h-4 text-red-600 dark:text-green-600" />
        )}
      </motion.div>
      <motion.div
        className="fixed top-10 left-10 pointer-events-none z-[9999]"
        animate={{
          x: snowflakePosition.x,
          y: snowflakePosition.y,
          scale: isPointer ? 1.5 : 1,
          rotate: 360
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 0.1,
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <Snowflake className="w-6 h-6 text-purple-600 dark:text-white" />
      </motion.div>
      <div className="fixed top-50 left-50 pointer-events-none z-[9999]">
        {[...Array(30)].map((_, index) => (
          <Firefly
            key={index}
            index={index}
            centerX={snowflakePosition.x + 52}
            centerY={snowflakePosition.y + 52}
          />
        ))}
      </div>
    </>
  );
};
