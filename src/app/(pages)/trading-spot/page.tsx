"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Label } from "@/components/ui/label";
import { Dot } from "lucide-react";
import {
  beforeOrderNotes,
  conditionForEnteringATrade,
  exitTrade,
  RulesTrade,
  spotIncreaseH4,
  spotIncrease1D,
  StepOrderData,
  strategy,
  spotcatchH4,
  spotcatch1D
} from "./data";
import { ImageGallery } from "@/components/trade-entry/ImageGallery";
import { InfoModal } from "@/components/trade-entry/InfoModal";
import { InfoCard } from "@/components/technical-analysis/InfoCard";

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
      title: "BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ KHUNG H4",
      imageSrc: "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
      onClick: () => toggleModal("spotH4")
    },
    {
      title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG H4",
      imageSrc: "/beautiful-modal/2.Bắt đáy khi tạo đáy cao dần.png",
      onClick: () => toggleModal("spotCatchH4")
    },
    {
      title: "BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ KHUNG 1D",
      imageSrc: "/beautiful-modal/3.Bắt sóng hồi của sóng tăng trước đó.png",
      onClick: () => toggleModal("spotH4")
    },
    {
      title: "BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN KHUNG 1D",
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

      <InfoModal
        isOpen={modals.criteria}
        onClose={() => toggleModal("criteria")}
        items={conditionForEnteringATrade}
        title="BỘ TIÊU CHÍ VÀO LỆNH"
        isCheckbox
      />
      <InfoModal
        isOpen={modals.exitTrade}
        onClose={() => toggleModal("exitTrade")}
        items={exitTrade}
        title="BỘ TIÊU CHÍ THOÁT LỆNH"
        isCheckbox
      />
      <InfoModal
        isOpen={modals.rules}
        onClose={() => toggleModal("rules")}
        items={RulesTrade}
        title="BỘ QUY TẮC PHẢI TUÂN THỦ"
        isCheckbox={false}
      />
      <InfoModal
        isOpen={modals.importantNote}
        onClose={() => toggleModal("importantNote")}
        items={beforeOrderNotes}
        title="GIAO DỊCH P2P"
      />

      <InfoModal
        isOpen={modals.stepOrder}
        onClose={() => toggleModal("stepOrder")}
        items={StepOrderData}
        title="CÁC BƯỚC VÀO LỆNH GIAO DỊCH SPOT"

      />
      <Modal
        isOpen={modals.strategy}
        onClose={() => toggleModal("strategy")}
        title="CHIẾN LƯỢC ĐẦU TƯ"
      >
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
      </Modal>
      <ImageGallery
        images={spotIncreaseH4}
        title="BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ kHUNG H4"
        isOpen={modals.spotH4}
        onClose={() => toggleModal("spotH4")}
      />
      <ImageGallery
        images={spotcatchH4}
        title="BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN kHUNG H4"
        isOpen={modals.spotCatchH4}
        onClose={() => toggleModal("spotCatchH4")}
      />
      <ImageGallery
        images={spotIncrease1D}
        title="BẮT CON SÓNG HỒI CỦA MỘT SÓNG TĂNG TRƯỚC ĐÓ kHUNG H4"
        isOpen={modals.spotH4}
        onClose={() => toggleModal("spotH4")}
      />
      <ImageGallery
        images={spotcatch1D}
        title="BẮT ĐÁY KHI TẠO ĐÁY CAO DẦN kHUNG H4"
        isOpen={modals.spotCatchH4}
        onClose={() => toggleModal("spotCatchH4")}
      />
    </ContentLayout>
  );
}
