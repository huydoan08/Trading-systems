"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";

interface ImageGridProps {
  images: Array<{
    src: string;
    title?: string;
    category?: string;
    span?: "full" | "half" | "third";
  }>;
}

interface ClickPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function ImageGrid({ images }: ImageGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [clickPosition, setClickPosition] = useState<ClickPosition | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const element = imageRefs.current[idx];
    if (element) {
      const rect = element.getBoundingClientRect();
      setClickPosition({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
      });
    }
    setSelectedIndex(idx);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  };

  const toggleFullscreen = () => {
    if (!modalRef.current) return;
    
    if (!isFullscreen) {
      if (modalRef.current.requestFullscreen) {
        modalRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(true);
        });
        setIsFullscreen(true);
      } else {
        setIsFullscreen(true);
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const getSpanClass = (span?: string) => {
    switch (span) {
      case "full":
        return "col-span-1 md:col-span-2 lg:col-span-2";
      case "half":
        return "col-span-1 md:col-span-1";
      case "third":
      default:
        return "col-span-1";
    }
  };

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 auto-rows-f">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            ref={(el) => {
              imageRefs.current[idx] = el;
            }}
            className={`${getSpanClass(image.span)} relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-72 md:h-80`}
            onClick={(e) => handleImageClick(idx, e)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: idx * 0.08 }}
            exit={{ opacity: 0, y: -24 }}
            whileHover={{ scale: 1.02 }}
            style={{ willChange: "transform, opacity" }}
          >
            {/* Image */}
            <motion.img
              src={image.src}
              alt={image.title || `Image ${idx + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex flex-col justify-between p-4"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {/* Top info */}
              <div>
                {image.category && (
                  <span className="inline-block bg-white/90 backdrop-blur-md text-gray-800 text-xs md:text-sm px-3 py-1 rounded-full font-medium">
                    {image.category}
                  </span>
                )}
              </div>

              {/* Bottom info */}
              {image.title && (
                <motion.div
                  initial={{ translateY: 20, opacity: 0 }}
                  whileHover={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-lg md:text-xl font-bold leading-tight">
                    {image.title}
                  </h3>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedIndex !== null && clickPosition && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(null)}
          >
            {/* Modal Content - Zoom from click position */}
            <motion.div
              ref={modalRef}
              className={`relative w-full ${isFullscreen ? "fixed inset-0" : "max-w-5xl"}`}
              initial={{
                opacity: 0,
                scale: 0.3,
                x: clickPosition.x + clickPosition.width / 2 - window.innerWidth / 2,
                y: clickPosition.y + clickPosition.height / 2 - window.innerHeight / 2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.3,
                x: clickPosition.x + clickPosition.width / 2 - window.innerWidth / 2,
                y: clickPosition.y + clickPosition.height / 2 - window.innerHeight / 2,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className={`relative w-full ${isFullscreen ? "h-screen bg-black" : "bg-white rounded-2xl shadow-2xl"} overflow-hidden`} style={!isFullscreen ? { aspectRatio: '16 / 10' } : {}}>
                <motion.img
                  key={selectedIndex}
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title || `Image ${selectedIndex + 1}`}
                  className={`w-full h-full ${isFullscreen ? "object-contain" : "object-cover"}`}
                  initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />

                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 left-4 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-gray-200 rounded-full p-3 shadow-lg backdrop-blur-md z-20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>

                {/* Fullscreen Button */}
                <motion.button
                  onClick={toggleFullscreen}
                  className="absolute top-4 right-4 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-gray-200 rounded-full p-3 shadow-lg backdrop-blur-md z-20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isFullscreen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
                </motion.button>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-gray-200 rounded-full p-3 shadow-lg backdrop-blur-md z-20 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-gray-200 rounded-full p-3 shadow-lg backdrop-blur-md z-20 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={24} />
                    </motion.button>
                  </>
                )}

                {/* Image Counter */}
                <motion.div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-20"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedIndex + 1} / {images.length}
                </motion.div>
              </div>

              {/* Info Section - Ngoài khung ảnh */}
              {images[selectedIndex].title && (
                <motion.div
                  className="mt-6 text-white space-y-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {images[selectedIndex].title}
                  </h2>
                  {images[selectedIndex].category && (
                    <p className="text-sm text-gray-400">
                      {images[selectedIndex].category}
                    </p>
                  )}
                </motion.div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
