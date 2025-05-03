"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { afterTraderCloses } from "./data";

const imagesH1 = [
  "/weakening-model/8.Mô hình suy yếu 01.png",
  "/signs-of-h1-weakening/H1-weaking-000021.png",
  "/signs-of-h1-weakening/H1-weaking-0000212.png",
  "/signs-of-h1-weakening/H1-weakening-0000312.png",
  "/signs-of-h1-weakening/H1-weakening-000031.png",
  "/signs-of-h1-weakening/H1-weakening-00000042.png",
  "/signs-of-h1-weakening/sign-of-H1-weakening.png"
];

const Checklist = () => (
  <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
    <CardContent className="p-6 space-y-4">
      <div className="font-bold text-lg text-black-800 dark:text-white">
        Tiêu chí thoát lệnh giao dịch:
      </div>
      <div className="space-y-2">
        {afterTraderCloses.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-2">
            <Checkbox />
            <Label className="text-black-700 font-semibold dark:text-white">
              {item}
            </Label>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ImageGallery = ({ windowHeight }: { windowHeight: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const scrollToRef = () => {
    imageRef.current?.scrollIntoView({ behavior: "instant", block: "nearest" });
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    setCurrentIndex(prev => {
      const next = direction === 'next' 
        ? (prev + 1) % imagesH1.length
        : (prev - 1 + imagesH1.length) % imagesH1.length;
      scrollToRef();
      return next;
    });
  };

  return (
    <Card
      className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
      style={{ height: `${windowHeight - 80}px` }}
    >
      <CardContent className="p-6 space-y-4 h-full">
        <div
          ref={imageRef}
          className="relative w-full h-full overflow-hidden rounded-lg"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={imagesH1[currentIndex]}
              alt={`Mẫu ${currentIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
          </button>
          <button
            onClick={() => navigateImage('next')}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
            aria-label="Next Image"
          >
            <ChevronRight size={32} className="text-black-800 dark:text-black-200" />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {imagesH1.length}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ExitTradeOrderPage() {
  const [windowHeight, setWindowHeight] = useState(0);
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/");
    });
    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const updateHeight = () => setWindowHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  if (!sidebar) return null;

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <Checklist />
      <ImageGallery windowHeight={windowHeight} />
    </ContentLayout>
  );
}
