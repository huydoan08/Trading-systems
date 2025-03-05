"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/demo-dark-min.png",
  "/demo-light-min.png",
  "/demo-dark-min.png",
];

export default function BeautifulModelPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!sidebar) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <ContentLayout title="Mẫu hình đúng tiêu chuẩn">
      <Card className="max-h-[67.5vh] overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Mẫu ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Nút Prev */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} className="text-gray-800 dark:text-gray-200" />
            </button>

            {/* Nút Next */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight size={32} className="text-gray-800 dark:text-gray-200" />
            </button>

            {/* Hiển thị số ảnh */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
