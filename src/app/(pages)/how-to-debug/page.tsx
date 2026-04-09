"use client";

import { useState } from "react";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { mindsetDeveloper } from "./data";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ExpandableCard } from "@/app/component/expandableCard";

export default function HowToDebugPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="How to debug">
      {mindsetDeveloper.map((item, index) => (
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
