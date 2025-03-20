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
  "Cập nhật tình hình thị trường ngày 20-03-2025:",
  "Khung 1M => Lưỡng lự, đo fibo vẫn giữ cấu trúc sóng tăng.",
  "Khung 1W => Giảm, bắt đầu có dấu hiệu điều chỉnh.",
  "Khung D1 => Sideway, bắt đầu cắt lên trên 2 DTB.",
  "Khung H4 => Tăng, RSI đang mở rộng, mới chạm vùng 70 đã có dấu hiệu điều chỉnh",
  "Khung H1 => RSI chưa chạm vùng 80 thì có dấu hiệu điều chỉnh, lực tăng không thực sự mạnh mẽ, cần chú ý quan sát tiếp.."
];
const planningH4 = [
  "Chiến lược ngắn hạn => Vào hàng BTC, quảng lý SL đáy 82K, quản lý theo cấu trúc sóng H4."
];
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
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-lg text-black-800 dark:text-white">
            Quan sát đa khung thời gian để nhìn thấy được bức tranh tổng thể của
            toàn bộ thị trường:
          </div>
          <div className="space-y-2">
            {multiTime.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-black-600 dark:text-white">-</span>
                <Label className="text-black-700 font-semibold dark:text-white">
                  {item}
                </Label>
              </div>
            ))}
            {planningH4.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-black-600 text-green-600 dark:text-green-400">
                  -
                </span>
                <Label className="text-black-700 text-green-600 font-semibold dark:text-green-400">
                  {item}
                </Label>
              </div>
            ))}
            {planningW.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-black-600 text-blue-600 dark:text-blue-400">
                  -
                </span>
                <Label className="text-black-700 text-blue-600 font-semibold dark:text-blue-400">
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
