import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VCheckbox() {

  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn(
          "w-6 h-6 border-2 border-green-600 rounded-md flex items-center justify-center cursor-pointer",
          "bg-green-200"
        )}
      >
      <Check className="w-4 h-4 text-green-700" />
      </div>
    </div>
  );
}
