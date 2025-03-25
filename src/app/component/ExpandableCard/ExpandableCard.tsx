import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onClick: () => void;
}

export function ExpandableCard({ title, content, isOpen, onClick }: ExpandableCardProps) {
  return (
    <Card
      className="shadow-lg border border-black-200 dark:border-black-700 mt-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-6">
        <span className="font-bold text-lg text-black-800 dark:text-white">{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <CardContent className="p-6 space-y-2 border-t text-black-700 dark:text-white max-h-[40vh] overflow-auto sm:max-h-[60vh]">
          {content.map((item, idx) => (
            <div key={idx} className="text-black-700 dark:text-white">
              {item.split("\n").map((line, lineIdx) => (
                <span key={lineIdx}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          ))}
        </CardContent>
      </motion.div>
    </Card>
  );
}
