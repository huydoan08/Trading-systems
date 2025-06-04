"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InfoCard } from "@/components/technical-analysis/InfoCard";
import { ImageGallery } from "@/components/technical-analysis/ImageGallery";
import { InfoModal } from "@/components/technical-analysis/InfoModal";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { quintessenceRsi, supportAndResistance } from "./data";
import { CARD_DATA } from "./constants";

type ModalType = "rsi" | "support" | "trap" | "excess" | "break" | "divergence";

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
          items={quintessenceRsi}
        />
      );
    }

    if (activeModal === "support") {
      return (
        <InfoModal
          isOpen={true}
          onClose={handleCloseModal}
          title={card.title}
          items={supportAndResistance}
        />
      );
    }

    if ('images' in card) {
      return (
        <ImageGallery
          images={card.images}
          title={card.title}
          isOpen={true}
          onClose={handleCloseModal}
        />
      );
    }

    return null;
  };

  return (
    <ContentLayout title="Phân tích kĩ thuật">
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
