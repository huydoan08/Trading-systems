import { Card, CardContent } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageGallery = ({ images, title, isOpen, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const scrollToImage = () => {
    imageContainerRef.current?.scrollIntoView({ behavior: "instant", block: "nearest" });
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % images.length;
      scrollToImage();
      return next;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      scrollToImage();
      return next;
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <Card className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4 h-full">
          <div ref={imageContainerRef} className="relative w-full h-full overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Mẫu ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight size={32} className="text-black-800 dark:text-black-200" />
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}; 