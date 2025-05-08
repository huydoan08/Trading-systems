import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Copy, Dot, Check } from "lucide-react";

interface InfoModalProps {
  isCheckbox?: boolean;
  isCopy?: boolean;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: string[];
}

export const InfoModal = ({
  isCheckbox,
  isOpen,
  onClose,
  title,
  items,
  isCopy,
}: InfoModalProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 10000); 
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-start">
            {isCheckbox ? (
              <Checkbox />
            ) : isCopy ? (
              <div
                className="cursor-pointer"
                onClick={() => handleCopy(item, idx)}
              >
                {copiedIndex === idx ? (
                  <Check className="text-green-500" />
                ) : (
                  <Copy />
                )}
              </div>
            ) : (
              <Dot className="h-6 w-6 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
            )}
            <Label className="text-lg text-black-700 font-semibold dark:text-white ml-3">
              {item}
            </Label>
          </div>
        ))}
      </div>
    </Modal>
  );
};
