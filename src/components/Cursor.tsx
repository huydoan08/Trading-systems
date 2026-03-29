"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Snowflake } from "lucide-react";

export const Cursor = () => {
  const [snowflakePosition, setSnowflakePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setSnowflakePosition({ x: e.clientX - 12, y: e.clientY - 12 });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-10 left-10 pointer-events-none z-[9999]"
      animate={{
        x: snowflakePosition.x,
        y: snowflakePosition.y,
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
  );
};
