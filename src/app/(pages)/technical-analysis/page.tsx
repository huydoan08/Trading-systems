"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import { quintessenceRsi, supportAndResistance } from "./data";

const images = ["/support-resistance/cam-bay-01.png"];

export default function QuintessenceOfRsiPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isRsiModalOpen, setIsRsiModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const sidebar = useStore(useSidebar, (x) => x);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!sidebar) return null;

  const scrollToImage = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({
        behavior: "instant",
        block: "nearest"
      });
    }
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
    <ContentLayout title="Phân tích kĩ thuật">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Card 
          className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setIsRsiModalOpen(true)}
        >
          <CardContent className="p-6 space-y-4">
            <div className="font-bold text-lg text-black-800 dark:text-white">
              CHỈ BÁO RSI:
            </div>
            <div className="space-y-3">
              {quintessenceRsi.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <Dot className="h-5 w-5 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
                  <Label className="text-black-700 font-semibold dark:text-white ml-2">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card 
          className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setIsSupportModalOpen(true)}
        >
          <CardContent className="p-6 space-y-4">
            <div className="font-bold text-lg text-black-800 dark:text-white">
              HỖ TRỢ & KHÁNG CỰ:
            </div>
            <div className="space-y-3">
              {supportAndResistance.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <Dot className="h-5 w-5 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
                  <Label className="text-black-700 font-semibold dark:text-white ml-2">
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card
        className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
        style={{
          height: `${windowHeight - 80}px`
        }}
      >
        <CardContent className="p-6 space-y-4 h-full">
        <h1 className="font-bold">CẠM BẪY</h1>
          <div
            ref={imageContainerRef}
            className="relative w-full h-full overflow-hidden rounded-lg"
          >
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
              <ChevronLeft
                size={32}
                className="text-black-800 dark:text-black-200"
              />
            </button>

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

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </CardContent>
      </Card>

      <Modal
        isOpen={isRsiModalOpen}
        onClose={() => setIsRsiModalOpen(false)}
        title="CHỈ BÁO RSI"
      >
        <div className="space-y-4">
          {quintessenceRsi.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <Dot className="h-6 w-6 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
              <Label className="text-lg text-black-700 font-semibold dark:text-white ml-3">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        title="HỖ TRỢ & KHÁNG CỰ"
      >
        <div className="space-y-4">
          {supportAndResistance.map((item, idx) => (
            <div key={idx} className="flex items-start">
              <Dot className="h-6 w-6 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
              <Label className="text-lg text-black-700 font-semibold dark:text-white ml-3">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </Modal>
    </ContentLayout>
  );
}
