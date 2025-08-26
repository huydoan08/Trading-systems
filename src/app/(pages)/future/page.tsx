"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardHeader } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { useState, useEffect } from "react";
import { dataOverview } from "./data";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";

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
    <ContentLayout title="Hệ Thống Giao Dịch Future ">
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex-1 overflow-auto">
          <Card className="bg-card dark:bg-black border border-[#e5e7eb] dark:border-[#222] rounded-xl">
            {dataOverview.map((item, index) => (
              <ExpandableCard
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                isFirst={index === 0}
                isLast={index === dataOverview.length - 1}
              />
            ))}
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}
