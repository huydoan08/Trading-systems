"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

const multiTime = [
  "Khung M => Giảm | RSI bắt đầu bó sát vào 2 đường TB tại vùng 60.",
  "Khung W => Giảm | RSI đang mở rộng, đang ở 40-60 .",
  "Khung D => Sideway | RSI bó sát 2 đường TB tại vùng 40.",
  "Khung H4 => Sideway | RSI đang bó hẹp lại quanh vùng 40-60."
];
const planningH4 = [
  "Chiến lược ngắn hạn H4 => Chờ đợi giá test lại vùng 76K rồi sẽ phân bổ vốn cho SPOT."
];
const planningW = [
  "Chiến lược dài hạn W => Kiên nhẫn chờ giá về vùng tích lũy đẹp rồi dải vốn dần để gom hàng."
];

export default function StrategyPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
          Quan sát đa khung thời gian để nhìn thấy được bức tranh tổng thể của toàn bộ thị trường:
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
