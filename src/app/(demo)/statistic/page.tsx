"use client";
import VCheckbox from "@/components/admin-panel/VCheckbox";
import XCheckbox from "@/components/admin-panel/XCheckbox";
import BarChartPage from "@/components/admin-panel/bar-chart";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <Card className="w-full md:w-[400px] h-auto md:h-[418px] flex flex-col items-start justify-start shadow-lg border border-black-200 dark:border-black-700 p-4">
          <CardContent className="grid grid-cols-10 gap-2">
            <XCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
            <VCheckbox />
          </CardContent>
        </Card>
        <div className="w-full md:w-auto flex-grow">
          <BarChartPage />
        </div>
      </div>
    </ContentLayout>
  );
}
