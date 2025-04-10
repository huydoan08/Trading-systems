"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";

const images = [
  "/personal-growth/PTBT-05.jpg",
  "/personal-growth/growth-01.jpg",
  "/personal-growth/growth-03.jpg",
  "/personal-growth/growth-02.jpg",
  "/personal-growth/PTBT-06.jpg",
  "/personal-growth/PTBT-09.webp",
  "/personal-growth/growth-04.webp",
  "/personal-growth/growth-05.webp",
  "/personal-growth/growth-06.webp",
  "/personal-growth/growth-07.webp",
  "/personal-growth/growth-08.jpg",
  "/personal-growth/growth-09.webp",
  "/personal-growth/growth-10.webp",
  "/personal-growth/growth-11.webp",
  "/personal-growth/growth-12.jpg",
  "/personal-growth/growth-13.jpg",
  "/personal-growth/growth-14.png",
  "/personal-growth/growth-16.png",
  "/personal-growth/growth-17.png",
  "/personal-growth/growth-18.png",
  "/personal-growth/growth-19.png",
  "/personal-growth/growth-20.png",
  "/personal-growth/growth-21.png",
  "/personal-growth/growth-22.png",
  "/personal-growth/growth-23.png",
  "/personal-growth/growth-25.png",
  "/personal-growth/growth-26.png",
  "/personal-growth/growth-27.png",
  "/personal-growth/growth-28.png",
  "/personal-growth/growth-29.png",
  "/personal-growth/growth-30.png",
  "/personal-growth/growth-31.png",
  "/personal-growth/growth-32.png",
  "/personal-growth/growth-33.png",
  "/personal-growth/growth-34.png",
  "/personal-growth/growth-35.png",
  "/personal-growth/growth-36.png",
  "/personal-growth/growth-37.png",
  "/personal-growth/growth-38.png",
  "/personal-growth/growth-39.png",
  "/personal-growth/growth-40.png",
  "/personal-growth/growth-41.png",
  "/personal-growth/growth-42.png",
  "/personal-growth/growth-43.png",
  "/personal-growth/growth-44.png",
  "/personal-growth/growth-45.png",
  "/personal-growth/growth-46.png",
  "/personal-growth/growth-47.png",
  "/personal-growth/growth-48.png",
  "/personal-growth/growth-49.png",
  "/personal-growth/growth-50.png",
  "/personal-growth/growth-51.png",
  "/personal-growth/growth-52.png",
  "/personal-growth/growth-53.png",
  "/personal-growth/growth-54.png",
  "/personal-growth/growth-55.png",
  "/personal-growth/growth-56.png",
  "/personal-growth/growth-57.png",
  "/personal-growth/growth-58.png",
  "/personal-growth/growth-59.png",
  "/personal-growth/growth-60.png",
  "/personal-growth/growth-61.png",
  "/personal-growth/growth-62.png",
  "/personal-growth/growth-63.png",
  "/personal-growth/growth-64.png",
  "/personal-growth/growth-65.png",
  "/personal-growth/growth-66.png",
  "/personal-growth/growth-67.png",
  "/personal-growth/growth-68.png",
  "/personal-growth/growth-69.png",
  "/personal-growth/growth-70.png",
  "/personal-growth/growth-71.png",
  "/personal-growth/growth-72.png",
];

export default function PersonalGrowthPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const auth = getAuth();
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!sidebar) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
       <ContentLayout title="Phát triển bản thân.">
          <Card
            className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
            style={{
              height: `${windowHeight - 80}px`
            }}
          >
            <CardContent className="p-6 space-y-4 h-full">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
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

                {/* Nút Prev */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
                  aria-label="Previous Image"
                >
                  <ChevronLeft
                    size={32}
                    className="text-black-800 dark:text-black-200"
                  />
                </button>

                {/* Nút Next */}
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
                  aria-label="Next Image"
                >
                  <ChevronRight
                    size={32}
                    className="text-black-800 dark:text-black-200"
                  />
                </button>

                {/* Hiển thị số ảnh */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {currentIndex + 1} / {images.length}
                </div>
              </div>
            </CardContent>
          </Card>
        </ContentLayout>
    </>
  );
}
