"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { useRouter } from "next/navigation";
import { reactHooks } from "./data";
import { ExpandableCard } from "@/app/component/expandableCard";
import { useState } from "react";
import { SideContent } from "@/components/ui/SideContent";

export default function RaisingChildrenPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  if (!sidebar) return null;
  return (
    <ContentLayout title="ReactJS">
      <SideContent
        items={reactHooks}
        initialIndex={selectedIndex}
        onSelect={(i) => setSelectedIndex(i)}
      />
    </ContentLayout>
  );
}
