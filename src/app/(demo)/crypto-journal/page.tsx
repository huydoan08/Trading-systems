"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardHeader } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";
import { experience } from "@/data/data";
import { useState, useEffect } from "react";

export default function CryptoJournalPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Hành trình tôi đi tìm tôi">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 mb-2">
        <CardHeader>
          <div className="font-bold text-2xl text-black-800 dark:text-white">
           GÓC CHIA SẺ KIẾN THỨC, KINH NGHIỆM, CHIẾN LƯỢC VÀ TÂM SỰ NGHỀ TRADE:
          </div>
        </CardHeader>
      </Card>
      {experience.map((item, index) => (
        <ExpandableCard
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </ContentLayout>
  );
}
