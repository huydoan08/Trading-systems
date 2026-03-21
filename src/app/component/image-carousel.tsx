"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  className?: string;
}

export function ImageCarousel({ images, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <Card
        className={`h-auto overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}
      >
        <CardContent className="p-4 md:p-6 flex items-center justify-center">
          <p className="text-muted-foreground">No images available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-auto lg:h-screen overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
      <CardContent className="p-6 space-y-4 h-full">
        <div className="relative w-full h-full overflow-hidden rounded-lg group bg-black/10 dark:bg-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Mẫu ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            />
          </AnimatePresence>

          {/* Nút Prev */}
          <motion.button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all group-hover:opacity-100 opacity-0"
            aria-label="Previous Image"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ChevronLeft
              size={32}
              className="text-gray-800 dark:text-gray-200"
            />
          </motion.button>

          {/* Nút Next */}
          <motion.button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all group-hover:opacity-100 opacity-0"
            aria-label="Next Image"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ChevronRight
              size={32}
              className="text-gray-800 dark:text-gray-200"
            />
          </motion.button>

          {/* Hiển thị số ảnh */}
          <motion.div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {currentIndex + 1} / {images.length}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
