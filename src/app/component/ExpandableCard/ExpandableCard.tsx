import { CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onClick: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export function ExpandableCard({ title, content, isOpen, onClick, isFirst = false, isLast = false }: ExpandableCardProps) {
  return (
    <div
      className={`px-6 py-4 cursor-pointer select-none flex flex-col transition-colors duration-200 bg-white
        ${isFirst ? 'rounded-t-xl' : ''}
        ${isLast ? 'rounded-b-xl' : ''}
        ${!isLast ? 'border-b border-[#e5e7eb]' : ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-base text-black-800">{title}</span>
        {isOpen ? <ChevronUp className="text-black-800" /> : <ChevronDown className="text-black-800" />}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="expandable-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <CardContent className="p-0 pt-4 text-black-800 bg-transparent border-none">
              {content.map((item, idx) => (
                <div key={idx} className="text-black-700">
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
        )}
      </AnimatePresence>
    </div>
  );
}
