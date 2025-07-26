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
  exitTrade,
  RulesTrade,
  imagesCondition,
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
      title: "BỘ TIÊU CHÍ ĐỂ VÀO LỆNH",
      imageSrc: "/rules/tieu-chi-01.png",
      onClick: () => toggleModal("criteria"),
      isAnimated: true
    },
    {
      title: "BỘ TIÊU CHÍ ĐỂ THOÁT LỆNH",
      imageSrc: "/rules/exit-trade.png",
      onClick: () => toggleModal("exitTrade"),
      isAnimated: true
    },
    {
      title: "BỘ QUY TẮC PHẢI TUÂN THỦ",
      imageSrc: "/rules/quy-tac.png",
      onClick: () => toggleModal("rules"),
      isAnimated: true
    },
    {
      title: "GIAO DỊCH P2P",
      imageSrc: "/rules/p2p.png",
      onClick: () => toggleModal("importantNote"),
    },

    {
      title: "MẪU HÌNH ĐẸP",
      imageSrc: "/rules/beautiful-model.png",
      onClick: () => toggleModal("beautifulModel")
    },
    {
      title: "BOT GIAO DỊCH",
      imageSrc: "/rules/bot-hunter.png",
      onClick: () => toggleModal("botHunterModel")
    },
    {
      title: "CÁC BƯỚC VÀO LỆNH SPOT",
      imageSrc: "/rules/step-order.png",
      onClick: () => toggleModal("stepOrder")
    },
    {
      title: "CHIẾN LƯỢC ĐÂU TƯ",
      imageSrc: "/rules/strategy.png",
      onClick: () => toggleModal("strategy"),
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
      <InfoModal
        isOpen={modals.botHunterModel}
        onClose={() => toggleModal("botHunterModel")}
        items={BotHunter}
        title="BOT GIAO DỊCH SPOT HUNTER"
        isCopy
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
        images={imagesCondition}
        title="MẪU HÌNH ĐẸP"
        isOpen={modals.beautifulModel}
        onClose={() => toggleModal("beautifulModel")}
      />
    </ContentLayout>
  );
}
