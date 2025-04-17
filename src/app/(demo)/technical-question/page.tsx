"use client";
import { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ExpandableCard } from "@/app/component/ExpandableCard/ExpandableCard";
import { faqs } from "./data";

export default function RSIPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (!sidebar) return null;

  return (
    <ContentLayout title="Hỏi đáp về phân tích kĩ thuật">
      {faqs.map((faq, index) => (
        <ExpandableCard
          key={index}
          title={faq.title}
          content={faq.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </ContentLayout>
  );
}
