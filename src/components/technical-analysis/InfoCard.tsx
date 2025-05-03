import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  imageSrc: string;
  onClick: () => void;
}

export const InfoCard = ({ title, imageSrc, onClick }: InfoCardProps) => (
  <Card
    className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
    onClick={onClick}
  >
    <CardContent className="p-6 space-y-4">
      <div className="font-bold text-lg text-black-800 dark:text-white">{title}</div>
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
  </Card>
); 