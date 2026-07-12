"use client";
import { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { storyTelling } from "./data";
import { SideContent } from "@/components/ui/SideContent";

export default function RSIPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);
  if (sidebar === undefined) return null;
  return (
    <ContentLayout title="Những mẩu chuyện hay sưu tầm">
        <SideContent
              items={storyTelling}
              initialIndex={selectedIndex}
              onSelect={(i) => setSelectedIndex(i)}
            />
    </ContentLayout>
  );
}
