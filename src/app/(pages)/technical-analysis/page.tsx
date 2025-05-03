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
import Image from "next/image";

// Types
interface ImageGalleryProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

interface InfoCardProps {
  title: string;
  imageSrc: string;
  onClick: () => void;
}

// Components
const InfoCard = ({ title, imageSrc, onClick }: InfoCardProps) => (
  <Card
    className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 cursor-pointer hover:shadow-xl transition-shadow"
    onClick={onClick}
  >
    <CardContent className="p-6 space-y-4">
      <div className="font-bold text-lg text-black-800 dark:text-white">
        {title}
      </div>
      <div className="relative w-full h-48">
        <Image
          width={200}
          height={200}
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    </CardContent>
  </Card>
);

const ImageGallery = ({ images, title, isOpen, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);

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
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <Card className="w-full overflow-hidden shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4 h-full">
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
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
};

const InfoModal = ({ isOpen, onClose, title, items }: { isOpen: boolean; onClose: () => void; title: string; items: string[] }) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title}>
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start">
          <Dot className="h-6 w-6 text-black-600 dark:text-black-300 mt-1 flex-shrink-0" />
          <Label className="text-lg text-black-700 font-semibold dark:text-white ml-3">
            {item}
          </Label>
        </div>
      ))}
    </div>
  </Modal>
);

// Main Component
export default function QuintessenceOfRsiPage() {
  const [isRsiModalOpen, setIsRsiModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isTrap, setIsTrap] = useState(false);
  const [isExcess, setIsExcess] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isDivergence, setIsDivergence] = useState(false);
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

  const cardData = [
    {
      title: "CHỈ BÁO RSI",
      imageSrc: "/support-resistance/rsi.png",
      onClick: () => setIsRsiModalOpen(true)
    },
    {
      title: "HỖ TRỢ & KHÁNG CỰ",
      imageSrc: "/support-resistance/resistance.png",
      onClick: () => setIsSupportModalOpen(true)
    },
    {
      title: "CẠM BẪY",
      imageSrc: "/support-resistance/trap-01.png",
      onClick: () => setIsTrap(true)
    },
    {
      title: "BỨT PHÁ",
      imageSrc: "/support-resistance/excess-01.png",
      onClick: () => setIsExcess(true)
    },
    {
      title: "QUÁ ĐÀ",
      imageSrc: "/support-resistance/break-01.png",
      onClick: () => setIsBreak(true)
    },
    {
      title: "PHÂN KÌ",
      imageSrc: "/support-resistance/divergence-01.png",
      onClick: () => setIsDivergence(true)
    }
  ];

  return (
    <ContentLayout title="Phân tích kĩ thuật">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {cardData.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      <InfoModal
        isOpen={isRsiModalOpen}
        onClose={() => setIsRsiModalOpen(false)}
        title="CHỈ BÁO RSI"
        items={quintessenceRsi}
      />

      <InfoModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
        title="HỖ TRỢ & KHÁNG CỰ"
        items={supportAndResistance}
      />

      <ImageGallery
        images={["/support-resistance/cam-bay-01.png"]}
        title="CẠM BẪY"
        isOpen={isTrap}
        onClose={() => setIsTrap(false)}
      />

      <ImageGallery
        images={["/support-resistance/excess-02.png"]}
        title="BỨT PHÁ"
        isOpen={isExcess}
        onClose={() => setIsExcess(false)}
      />

      <ImageGallery
        images={["/support-resistance/break-02.png"]}
        title="QUÁ ĐÀ"
        isOpen={isBreak}
        onClose={() => setIsBreak(false)}
      />
      <ImageGallery
        images={["/support-resistance/divergence-02.png", "/support-resistance/divergence-03.png"]}
        title="PHÂN KÌ"
        isOpen={isDivergence}
        onClose={() => setIsDivergence(false)}
      />
    </ContentLayout>
  );
}
