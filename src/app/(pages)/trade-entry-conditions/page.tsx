"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Dot } from "lucide-react";
import {
  basicOrder,
  beforeOrderNotes,
  BotHunter,
  conditionForEnteringATrade,
  imagesCondition,
  plan,
  StepOrderData,
  strategy
} from "./data";
import { ImageGallery } from "@/components/trade-entry/ImageGallery";
import { InfoModal } from "@/components/trade-entry/InfoModal";
import { InfoCard } from "@/components/technical-analysis/InfoCard";

export default function ConditionForEnteringATradePage() {
  const [modals, setModals] = useState({
    criteria: false,
    importantNote: false,
    beautifulModel: false,
    botHunterModel: false,
    strategy: false,
    stepOrder: false
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
      title: "BỘ TIÊU CHÍ VÀO LỆNH GIAO DỊCH",
      imageSrc: "/beautiful-modal/tieu-chi-01.png",
      onClick: () => toggleModal("criteria"),
      isAnimated: true
    },
    {
      title: "GIAO DỊCH P2P",
      imageSrc: "/beautiful-modal/important-note.png",
      onClick: () => toggleModal("importantNote"),
    },
    {
      title: "CHIẾN LƯỢC",
      imageSrc: "/beautiful-modal/strategy.png",
      onClick: () => toggleModal("strategy"),
    },
    {
      title: "MẪU HÌNH ĐẸP",
      imageSrc: "/beautiful-modal/beautiful-model.png",
      onClick: () => toggleModal("beautifulModel")
    },
    {
      title: "BOT GIAO DỊCH",
      imageSrc: "/beautiful-modal/bot-hunter.png",
      onClick: () => toggleModal("botHunterModel")
    },
    {
      title: "CÁC BƯỚC VÀO LỆNH SPOT",
      imageSrc: "/beautiful-modal/step-order.png",
      onClick: () => toggleModal("stepOrder")
    }
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
        isOpen={modals.stepOrder}
        onClose={() => toggleModal("stepOrder")}
        items={StepOrderData}
        title="CÁC BƯỚC VÀO LỆNH GIAO DỊCH SPOT"
      />
      <InfoModal
        isOpen={modals.criteria}
        onClose={() => toggleModal("criteria")}
        items={conditionForEnteringATrade}
        title="BỘ TIÊU CHÍ VÀO LỆNH"
        isCheckbox
      />
      <InfoModal
        isOpen={modals.botHunterModel}
        onClose={() => toggleModal("botHunterModel")}
        items={BotHunter}
        title="BOT GIAO DỊCH SPOT HUNTER"
         isCopy
      />
      <InfoModal
        isOpen={modals.importantNote}
        onClose={() => toggleModal("importantNote")}
        items={beforeOrderNotes}
        title="GIAO DỊCH P2P"
      />
      <Modal
        isOpen={modals.strategy}
        onClose={() => toggleModal("strategy")}
        title="CHIẾN LƯỢC"
      >
        <div className="font-[600] text-lg text-black-800 dark:text-white mb-2">
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
        <div className="font-[600] text-lg text-black-800 dark:text-white mt-4">
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
      </Modal>
      <ImageGallery
        images={imagesCondition}
        title="MẪU HÌNH ĐẸP"
        isOpen={modals.beautifulModel}
        onClose={() => toggleModal("beautifulModel")}
      />
    </ContentLayout>
  );
}
