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
  spotcatch1D,
  spotCatch1W
} from "./data";

export default function ConditionForEnteringATradePage() {
  const [modals, setModals] = useState({
    criteria: false,
    importantNote: false,
    spotH4: false,
    spotIncreasingH4: false,
    spotCatch1D: false,
    spotCatch1W: false,
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
      title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG 1W",
      imageSrc: "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
      onClick: () => toggleModal("spotCatch1W"),
      imageModal: spotCatch1W,
      open: 'spotCatch1W'
    },
    {
      title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG 1D",
      imageSrc: "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
      onClick: () => toggleModal("spotCatch1D"),
      imageModal: spotcatch1D,
      open: 'spotCatch1D'
    },
    {
      title: "BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ H4 H2",
      imageSrc: "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
      onClick: () => toggleModal("spotIncreasingH4"),
      imageModal: spotIncreaseH4,
      open: 'spotIncreasingH4'
    },

  ];

  return (
    <ContentLayout title="Hệ Thống Giao Dịch">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {tradeCards.map((card, idx) => (
          <InfoCard key={idx} {...card} />
        ))}
      </div>
      {tradeCards.map((item) => (
        <ImageGallery
          images={item.imageModal}
          title={item.title}
          isOpen={modals[item.open as keyof typeof modals]}
          onClose={() => toggleModal(item.open as keyof typeof modals)}
        />
      ))}
    </ContentLayout>
  );
}
