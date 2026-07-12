"use client";

import { useState } from "react";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { mindsetDeveloper } from "./data";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { ExpandableCard } from "@/app/component/expandableCard";
import { SideContent } from "@/components/ui/SideContent";

export default function HowToDebugPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="How to debug" disableHorizontalPadding>
      <SideContent
        items={mindsetDeveloper}
        initialIndex={selectedIndex}
        onSelect={(i) => setSelectedIndex(i)}
      />
    </ContentLayout>
  );
}
