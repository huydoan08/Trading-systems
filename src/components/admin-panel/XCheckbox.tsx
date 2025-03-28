import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function XCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <div
        className={cn(
          "w-6 h-6 border-2 border-red-600 rounded-md flex items-center justify-center cursor-pointer",
         "bg-red-200" 
        )}
      >
       <X className="w-4 h-4 text-red-700" />
      </div>
    </div>
  );
}
