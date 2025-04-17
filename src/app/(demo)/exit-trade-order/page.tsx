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

const images = ["/weakening-model/8.Mô hình suy yếu 01.png"];
const imagesH1 = [
  "/signs-of-h1-weakening/H1-weaking-000021.png",
  "/signs-of-h1-weakening/H1-weaking-0000212.png",
  "/signs-of-h1-weakening/H1-weakening-0000312.png",
  "/signs-of-h1-weakening/H1-weakening-000031.png",
  "/signs-of-h1-weakening/H1-weakening-00000042.png",
  "/signs-of-h1-weakening/sign-of-H1-weakening.png"
];

export default function ConditionForEnteringATradePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexH1, setCurrentIndexH1] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  const imageRef = useRef<HTMLDivElement>(null);
  const imageH1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "instant",
        block: "nearest"
      });
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % images.length;
      scrollToRef(imageRef);
      return next;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + images.length) % images.length;
      scrollToRef(imageRef);
      return next;
    });
  };

  const nextImageH1 = () => {
    setCurrentIndexH1((prev) => {
      const next = (prev + 1) % imagesH1.length;
      scrollToRef(imageH1Ref);
      return next;
    });
  };

  const prevImageH1 = () => {
    setCurrentIndexH1((prev) => {
      const next = (prev - 1 + imagesH1.length) % imagesH1.length;
      scrollToRef(imageH1Ref);
      return next;
    });
  };

  if (!sidebar) return null;

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      {/* Checklist */}
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

      {/* Ảnh mô hình suy yếu */}
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
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
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

      {/* Ảnh dấu hiệu H1 suy yếu */}
      <Card
        className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
        style={{ height: `${windowHeight - 80}px` }}
      >
        <CardContent className="p-6 space-y-4 h-full">
          <div
            ref={imageH1Ref}
            className="relative w-full h-full overflow-hidden rounded-lg"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndexH1}
                src={imagesH1[currentIndexH1]}
                alt={`Mẫu ${currentIndexH1 + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <button
              onClick={prevImageH1}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
            </button>
            <button
              onClick={nextImageH1}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight size={32} className="text-black-800 dark:text-black-200" />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {currentIndexH1 + 1} / {imagesH1.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
