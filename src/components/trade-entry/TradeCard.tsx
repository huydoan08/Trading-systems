import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBorderCard } from "@/components/admin-panel/animated-border-card";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";

interface TradeCardProps {
  title: string;
  imageSrc: string;
  onClick: () => void;
  isAnimated?: boolean;
}

export const TradeCard = ({ title, imageSrc, onClick, isAnimated = false }: TradeCardProps) => {
  const CardComponent = isAnimated ? AnimatedBorderCard : Card;
  const cardClassName = isAnimated 
    ? "max-h-[67.5vh] overflow-auto shadow-lg"
    : "max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700";

  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        scale: isHovered ? 1.1 : 1,
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        zIndex: isHovered ? 10 : 1,
        position: "relative",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <CardComponent className={cardClassName}>
        <CardContent className="p-6 space-y-4" onClick={onClick}>
          <div className="font-bold text-lg text-black-800 dark:text-white">
            {title}
          </div>
          <div className="relative w-full h-48">
            <Image
              width={200}
              height={200}
              src={imageSrc}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        </CardContent>
      </CardComponent>
    </motion.div>
  );
}; 