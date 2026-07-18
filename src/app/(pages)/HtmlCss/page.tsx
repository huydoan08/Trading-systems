"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { HtmlCss } from "./data";
import { useState } from "react";
import { SideContent } from "@/components/ui/SideContent";

export default function HtmlCssPage() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="HTML & CSS" disableHorizontalPadding>
      <SideContent
        items={HtmlCss}
        initialIndex={selectedIndex}
        onSelect={(i) => setSelectedIndex(i)}
      />
    </ContentLayout>
  );
}
