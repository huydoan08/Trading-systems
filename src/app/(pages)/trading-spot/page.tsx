"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ImageGallery } from "@/components/trade-entry/ImageGallery";
import { InfoCard } from "@/components/technical-analysis/InfoCard";
import {
  spotIncreaseH4,
  spotcatchH4,
} from "./data";

export default function ConditionForEnteringATradePage() {
  const [modals, setModals] = useState({
    criteria: false,
    importantNote: false,
    spotH4: false,
    spotCatchH4: false,
    botHunterModel: false,
    strategy: false,
    stepOrder: false,
    rules: false,
    exitTrade: false
  });
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/");
    });
    return () => unsubscribe();
  }, [router]);

  if (!sidebar) return null;

  const toggleModal = (modal: keyof typeof modals) => {
    setModals(prev => ({ ...prev, [modal]: !prev[modal] }));
  };

  const tradeCards = [
    {
      title: "BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ",
      imageSrc: "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
      onClick: () => toggleModal("spotH4")
    },
    {
      title: "BẮT ĐÁY KHUNG 1D",
      imageSrc: "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
      onClick: () => toggleModal("spotCatchH4")
    },
  ];

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {tradeCards.slice(0, 2).map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {tradeCards.slice(2).map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>
      <ImageGallery
        images={spotIncreaseH4}
        title="BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC"
        isOpen={modals.spotH4}
        onClose={() => toggleModal("spotH4")}
      />
      <ImageGallery
        images={spotcatchH4}
        title="BẮT ĐÁY KHUNG 1D"
        isOpen={modals.spotCatchH4}
        onClose={() => toggleModal("spotCatchH4")}
      />
      
    </ContentLayout>
  );
}
