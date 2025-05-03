import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBorderCard } from "@/components/admin-panel/animated-border-card";
import Image from "next/image";

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

  return (
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
  );
}; 