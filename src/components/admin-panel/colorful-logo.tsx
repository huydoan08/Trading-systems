import { cn } from "@/lib/utils";

interface ColorfulLogoProps {
  className?: string;
  text?: string;
}

export function ColorfulLogo({ className, text = "HUGO TRADING" }: ColorfulLogoProps) {
  // Google-inspired color palette
  const colors = [
    "text-blue-500",   // T
    "text-orange-500",    // R
    "text-yellow-500", // A
    "text-blue-500",   // D
    "text-green-500",  // I
    "text-purple-500",    // N
    "text-blue-500",   // G
    "text-gray-400",   // (space)
    "text-blue-500",   // S
    "text-red-300",    // Y
    "text-yellow-500", // S
    "text-purple-500",   // T
  ];

  return (
    <h1 className={cn("font-bold text-lg whitespace-nowrap", className)}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={cn(
            "transition-colors duration-300",
            char === " " ? "text-transparent" : colors[index % colors.length]
          )}
        >
          {char}
        </span>
      ))}
    </h1>
  );
} 