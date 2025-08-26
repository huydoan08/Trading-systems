"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";
import { buddhism, imagesPersonal } from "./data";

export default function PersonalGrowthPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router, auth]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToImage = useCallback(() => {
    imageRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imagesPersonal.length);
    scrollToImage();
  }, [scrollToImage]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + imagesPersonal.length) % imagesPersonal.length);
    scrollToImage();
  }, [scrollToImage]);

  const handleCardClick = useCallback((index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  const currentImage = useMemo(() => imagesPersonal[currentIndex], [currentIndex]);

  if (!sidebar) return null;

  return (
    <ContentLayout title="Phát triển bản thân.">
      <Card
        className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
        style={{ height: `${windowHeight - 80}px` }}
        ref={imageRef}
      >
        <CardContent className="p-6 space-y-4 h-full">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage}
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
              {currentIndex + 1} / {imagesPersonal.length}
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-card border border-[#e5e7eb] dark:border-[#222] rounded-xl mb-6">
        {buddhism.map((bud, index) => (
          <ExpandableCard
            key={index}
            title={bud.title}
            content={bud.content as any}
            isOpen={openIndex === index}
            onClick={() => handleCardClick(index)}
            isFirst={index === 0}
            isLast={index === buddhism.length - 1}
          />
        ))}
      </Card>
    </ContentLayout>
  );
}
