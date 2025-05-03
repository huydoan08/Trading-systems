"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { duringTradeExecution, keepOrder } from "./data";
import { InfoModal } from "@/components/trade-entry/InfoModal";
import { InfoCard } from "@/components/technical-analysis/InfoCard";

const IMAGES = ["/manage-order/7.QLL tăng.png", "/manage-order/6.QLL giảm.png"];

const TRADE_CARDS = [
  {
    title: "TRONG KHI VÀO LỆNH",
    imageSrc: "/manage-order/during-order.png",
    modalType: "during"
  },
  {
    title: "TIÊU CHÍ GIỮ LỆNH",
    imageSrc: "/manage-order/keep-order.png",
    modalType: "keep",
  },
];

export default function DuringTradeExecutionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [activeModal, setActiveModal] = useState<"during" | "keep" | null>(null);

  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const imageContainerRef = useRef<HTMLDivElement>(null);

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

  const scrollToImage = () => {
    imageContainerRef.current?.scrollIntoView({
      behavior: "instant",
      block: "nearest"
    });
  };

  const handleImageChange = (direction: 'next' | 'prev') => {
    setCurrentIndex((prev) => {
      const next = direction === 'next'
        ? (prev + 1) % IMAGES.length
        : (prev - 1 + IMAGES.length) % IMAGES.length;
      scrollToImage();
      return next;
    });
  };

  const handleCardClick = (modalType: "during" | "keep") => {
    setActiveModal(modalType);
  };

  if (!sidebar) return null;

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {TRADE_CARDS.map((card, idx) => (
          <InfoCard
            key={idx}
            {...card}
            onClick={() => handleCardClick(card.modalType as "during" | "keep")}
          />
        ))}
      </div>

      <Card
        className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700"
        style={{ height: `${windowHeight - 80}px` }}
      >
        <CardContent className="p-6 space-y-4 h-full">
          <div
            ref={imageContainerRef}
            className="relative w-full h-full overflow-hidden rounded-lg"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={IMAGES[currentIndex]}
                alt={`Mẫu ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <button
              onClick={() => handleImageChange('prev')}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft size={32} className="text-black-800 dark:text-black-200" />
            </button>

            <button
              onClick={() => handleImageChange('next')}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 dark:bg-black/60 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition-all"
              aria-label="Next Image"
            >
              <ChevronRight size={32} className="text-black-800 dark:text-black-200" />
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
              {currentIndex + 1} / {IMAGES.length}
            </div>
          </div>
        </CardContent>
      </Card>

      <InfoModal
        isOpen={activeModal === "during"}
        onClose={() => setActiveModal(null)}
        title="Trong khi vào lệnh giao dịch:"
        items={duringTradeExecution}
        isCheckbox
      />

      <InfoModal
        isOpen={activeModal === "keep"}
        onClose={() => setActiveModal(null)}
        title="Tiêu chí tiếp tục giữ lệnh giao dịch:"
        items={keepOrder}
        isCheckbox
      />
    </ContentLayout>
  );
}
