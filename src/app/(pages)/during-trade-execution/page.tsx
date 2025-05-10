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
