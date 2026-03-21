"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { useRouter } from "next/navigation";
import { raisingchildren } from "./data";
import { ExpandableCard } from "@/app/component/expandableCard";
import { useState } from "react";

export default function RaisingChildrenPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  if (!sidebar) return null;
  return (
    <ContentLayout title="Nuôi dạy con cái đúng cách">
      {raisingchildren.map((item, index) => (
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
