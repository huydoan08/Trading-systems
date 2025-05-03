"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const images = ["/avoid-lossing-order/avoid-lossing-01.png"];

interface NavigationButtonProps {
  onClick: () => void;
  direction: "Previous" | "Next";
  className: string;
}

const NavigationButton = ({ onClick, direction, className }: NavigationButtonProps) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all ${className}`}
    aria-label={`${direction} Image`}
  >
    {direction === "Previous" ? (
      <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
    ) : (
      <ChevronRight size={32} className="text-black-800 dark:text-black-200" />
    )}
  </button>
);

interface ImageCounterProps {
  current: number;
  total: number;
}

const ImageCounter = ({ current, total }: ImageCounterProps) => (
  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
    {current + 1} / {total}
  </div>
);

export default function AvoidLossingOrderPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => !user && router.push("/"));
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!sidebar) return null;

  const navigateImage = (direction: "next" | "prev") => {
    setCurrentIndex((prev) => {
      const newIndex = direction === "next" ? prev + 1 : prev - 1;
      return (newIndex + images.length) % images.length;
    });
  };

  return (
    <ContentLayout title="Nhật kí giao dịch.">
      <Card
        className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
        style={{ height: `${windowHeight - 80}px` }}
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

            <NavigationButton
              onClick={() => navigateImage("prev")}
              direction="Previous"
              className="left-4"
            />
            <NavigationButton
              onClick={() => navigateImage("next")}
              direction="Next"
              className="right-4"
            />
            <ImageCounter current={currentIndex} total={images.length} />
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
