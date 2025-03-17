"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";

const multiTime = [
  "Khung 1M: Lưỡng lự.",
  "Khung 1W: => Giảm.",
  "Khung D1 => Giảm.",
  "Khung H4 => Sideway."
];
const planningH4 = ["Chiến lược ngắn hạn => tập trung đánh SPOT sóng H4."];
const planningW = [
  "Chiến lược dài hạn => Chưa có plan phân bổ vốn cho dài hạn."
];

export default function StrategyPage() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Quan sát đa khung thời gian để nhìn thấy được bức tranh tổng thể của
            toàn bộ thị trường:
          </div>
          <div className="space-y-2">
            {multiTime.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-gray-600 dark:text-white">-</span>
                <Label className="text-gray-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
            {planningH4.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-gray-600 text-green-600 dark:text-green-400">
                  -
                </span>
                <Label className="text-gray-700 text-green-600 font-semibold dark:text-green-400">
                  {item}
                </Label>
              </div>
            ))}
            {planningW.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-gray-600 text-blue-600 dark:text-blue-400">
                  -
                </span>
                <Label className="text-gray-700 text-blue-600 font-semibold dark:text-blue-400">
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </ContentLayout>
  );
}
