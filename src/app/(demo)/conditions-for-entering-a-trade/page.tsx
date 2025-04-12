"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox"
import { conditionForEnteringATrade } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/beautiful-modal/1.Xu hướng tăng.png",
  "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
  "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
  "/beautiful-modal/4.Điểm vào lệnh phá trendline.png",
  "/beautiful-modal/5.Điểm vào lệnh mô hình tam giác tăng.png",
];

export default function ConditionForEnteringATradePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const sidebar = useStore(useSidebar, (x) => x);
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

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Bộ tiêu chí vào lệnh giao dịch:
          </div>
          <div className="space-y-2">
            {conditionForEnteringATrade.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <Checkbox/>
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent> 
      </Card>
      <Card
        className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
        style={{
          height: `${windowHeight - 80}px`,
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
              <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
            </button>

            {/* Nút Next */}
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight size={32} className="text-black-800 dark:text-black-200" />
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
