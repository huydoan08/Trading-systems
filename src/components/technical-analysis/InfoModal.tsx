import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Dot } from "lucide-react";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: string[];
}

export const InfoModal = ({ isOpen, onClose, title, items }: InfoModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start">
          <Dot className="h-6 w-6 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
          <Label className="text-lg text-black-700 font-semibold dark:text-white ml-3">
            {item}
          </Label>
        </div>
      ))}
    </div>
  </Modal>
); 