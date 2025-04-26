"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardHeader } from "@/components/ui/card";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";
import { useState, useEffect } from "react";
import { experience } from "./data";

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
        <div className="flex-1 overflow-auto">
          <Card className="bg-white border border-[#e5e7eb] rounded-xl">
            {experience.map((item, index) => (
              <ExpandableCard
                key={`${item.title}-${index}`}
                title={item.title}
                content={Array.isArray(item.content) ? item.content : [item.content]}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                isFirst={index === 0}
                isLast={index === experience.length - 1}
              />
            ))}
          </Card>
        </div>
      </div>
    </ContentLayout>
  );
}
