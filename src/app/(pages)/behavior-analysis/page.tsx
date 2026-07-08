"use client";

import { useState } from "react";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { mindsetDeveloper } from "./data";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { SideContent } from "@/components/ui/SideContent";

export default function BehaviorAnalysis() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;

  return (
    <SideContent
      items={mindsetDeveloper}
      initialIndex={selectedIndex}
      onSelect={(i) => setSelectedIndex(i)}
    />
  );
}
