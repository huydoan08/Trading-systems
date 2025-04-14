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

interface ExperienceItem {
  title: string;
  content: string | string[];
}

export default function ExperienceCompilationPage() {
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
    <ContentLayout title="Tổng hợp kinh nghiệm">
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <Card className="shadow-lg border border-black-200 dark:border-black-700 mb-2">
          <CardHeader>
            <div className="font-bold text-2xl text-black-800 dark:text-white">
              TRADING PHIÊU LƯU KÍ
            </div>
          </CardHeader>
        </Card>

        <div className="flex-1 overflow-auto">
          {experience.map((item, index) => (
            <ExpandableCard
              key={`${item.title}-${index}`}
              title={item.title}
              content={Array.isArray(item.content) ? item.content : [item.content]}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
