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
      <div className="flex items-center justify-center">
        <Card className="w-full h-[418px] flex items-start justify-start shadow-lg border border-black-200 dark:border-black-700 p-4">
          <CardContent className="flex flex-row items-start justify-start space-x-4">
            <XCheckbox />
            <VCheckbox />
          </CardContent>
        </Card>
        <BarChartPage />
      </div>
    </ContentLayout>
  );
}
