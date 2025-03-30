"use client";
import TransactionCheckboxes from "@/components/admin-panel/check-component";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import NestedPieChart from "@/components/admin-panel/pie-chart";

export default function StatisticPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  
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
    <ContentLayout title="Thống kê chuỗi các lệnh giao dịch">
      <div className="flex items-center justify-center">
        <TransactionCheckboxes/>
        <NestedPieChart/>
      </div>
    </ContentLayout>
  );
}
