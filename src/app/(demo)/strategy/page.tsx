"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

const multiTime = [
  "Khung M: Sideway, thiên về xu hướng giảm.",
  "Khung W: Giảm, đã cắt xuống, mới đi được khoảng 10% hành trình.",
  "Khung D: Siway biên độ rộng, thiên về xu hướng giảm.",
  "Khung H4: Giảm, bắt đầu cắt xuống, mới đi đc 5% hành trình.",
  "Khung H1: Giảm, đang mở rộng, đi được khoảng 40% hành trình."
];
const planning = [
  "Chiến lược ngắn hạn H4: Đã xác nhận xu hướng giảm, chiến lược sell và chờ sell.",
  "Chiến lược dài hạn W: Chưa có vùng tích lũy đẹp, nên ngồi ngoài học tập."
];

export default function StrategyPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Nhìn về đa khung thời gian để thấy được bức tranh tổng thể của thị
            trường:
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
            {planning.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-gray-600 text-blue-600 dark:text-green-400">-</span>
                <Label className="text-gray-700 text-blue-600 font-semibold dark:text-green-400">
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
