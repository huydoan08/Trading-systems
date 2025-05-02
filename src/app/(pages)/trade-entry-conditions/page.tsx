"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import {
  basicOrder,
  beforeOrderNotes,
  conditionForEnteringATrade,
  imagesCondition,
  plan,
  strategy
} from "./data";
import { AnimatedBorderCard } from "@/components/admin-panel/animated-border-card";

export default function ConditionForEnteringATradePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const imageContainerRef = useRef<HTMLDivElement>(null);

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

  if (!sidebar) return null;

  const scrollToImage = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % imagesCondition.length;
      scrollToImage();
      return next;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + imagesCondition.length) % imagesCondition.length;
      scrollToImage();
      return next;
    });
  };

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <AnimatedBorderCard className="max-h-[67.5vh] overflow-auto shadow-lg">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            BỘ TIÊU CHÍ VÀO LỆNH GIAO DỊCH:
          </div>
          <div className="space-y-2">
            {conditionForEnteringATrade.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <Checkbox />
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </AnimatedBorderCard>

      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            CHIẾN THUẬT:
          </div>
          <div className="font-[600] text-lg text-black-800 dark:text-white">
            1. Chọn phương án: tùy theo trạng thái thị trường có thể chọn các
            phương án khác nhau: mua(long), bán(short), lướt ngắn, giữ dài, đứng
            ngoài.
          </div>
          <div className="space-y-2">
            {plan.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <Checkbox />
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
          <div className="font-[600] text-lg text-black-800 dark:text-white">
            2. Sử dụng các lệnh cơ bản:
          </div>
          <div className="space-y-3">
            {basicOrder.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <Dot className="mt-2 flex-shrink-0" />
                <Label className="text-black-700 font-semibold dark:text-white block py-2">
                  {item}
                </Label>
              </div>
            ))}
          </div>
          <div className="font-[600] text-lg text-black-800 dark:text-white">
            3. Một vài chiến thuật:
          </div>
          <div className="space-y-3">
            {strategy.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <Dot className="mt-2 flex-shrink-0" />
                <Label className="text-black-700 font-semibold dark:text-white block py-2">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            MỘT SỐ LƯU Ý:
          </div>
          <div className="space-y-2">
            {beforeOrderNotes.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <Dot />
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4 h-full">
          <div
            ref={imageContainerRef}
            className="relative w-full h-full overflow-hidden rounded-lg"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={imagesCondition[currentIndex]}
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
              {currentIndex + 1} / {imagesCondition.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
