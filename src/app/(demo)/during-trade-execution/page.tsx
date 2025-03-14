"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

// Quản lý lệnh giao dịch sau khi vào
const duringTradeExecution = [
  "Quản lý lệnh giao dịch theo cấu trúc sóng hoặc theo fibo, không đặt stoploss quá sát.",
  "Không để cảm xúc chi phối vào và chốt lời non, chỉ đóng lệnh khi đã đạt đủ target đặt ra trước đó hoặc chạm stoploss.",
  "Không vội vàng dời stoploss ngay sau khi giá vừa mới chạy một xíu.",
  "Không cố gắng tìm cơ hội vào lệnh ngay sau khi chạm stoploss.",
  "Tuyệt đối không đóng lệnh bằng tay khi mà giá đang chạy.",
  "Chỉ giao dịch 1 chiều theo xu hướng chính."
];  

export default function DuringTradeExecutionPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Quá trình thực hiện lệnh giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Trong vào lệnh giao dịch:
          </div>
          <div className="space-y-2">
            {duringTradeExecution.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 ">
                <span className="text-gray-600 dark:text-white">-</span>
                <Label className="text-gray-700 font-semibold dark:text-white">
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
