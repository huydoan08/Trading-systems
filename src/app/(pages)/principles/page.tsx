"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InfoCard } from "@/components/technical-analysis/InfoCard";
import { InfoModal } from "@/components/technical-analysis/InfoModal";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EntryStrategy, ManageStrategy, rules } from "./data";
import { CARD_DATA } from "./constants";

type ModalType = (typeof CARD_DATA)[number]["modalType"];

export default function TechnicalAnalysisPage() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) router.push("/");
    });
    return () => unsubscribe();
  }, [router]);

  if (!sidebar) return null;

  const handleCardClick = (modalType: ModalType) => setActiveModal(modalType);
  const handleCloseModal = () => setActiveModal(null);

  const renderModal = () => {
    if (!activeModal) return null;

    const card = CARD_DATA.find((c) => c.modalType === activeModal);
    if (!card) return null;

    if (activeModal === "rsi") {
      return (
        <InfoModal
          isOpen={true}
          onClose={handleCloseModal}
          title={card.title}
          items={rules}
        />
      );
    }
    if (activeModal === "entry") {
      return (
        <InfoModal
          isOpen={true}
          onClose={handleCloseModal}
          title={card.title}
          items={EntryStrategy}
          useCheckbox={true}
        />
      );
    }
    if (activeModal === "manage") {
      return (
        <InfoModal
          isOpen={true}
          onClose={handleCloseModal}
          title={card.title}
          items={ManageStrategy}
        />
      );
    }

    return null;
  };

  return (
    <ContentLayout title="Bộ quy tắc">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {CARD_DATA.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            onClick={() => handleCardClick(card.modalType)}
          />
        ))}
      </div>
      {renderModal()}
    </ContentLayout>
  );
}
