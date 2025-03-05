"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

// Các tiêu chí trước khi vào một lệnh giao dịch
const conditionForEnteringATrade = [
  "Các mẫu hình đúng tiêu chuẩn, mẫu hình đẹp.",
  "Các khung thời gian phải đồng thuận.",
  "Xác định các đường trendline quan trọng và theo dõi phản ứng giá tại các vùng đó.",
  "Chờ xác nhận sóng hồi, để tối ưu điểm vào lệnh đẹp.",
  "Chờ dấu hiệu xác nhận Price Action.",
  "Không cố tình đoán đỉnh và đoán đáy.",
  "Mức rủi ro, mức thưởng và xác suất.",
  "Dùng fibo để xác định hiệu lực con sóng còn mạnh không.",
  "Tối ưu điểm vào lệnh đẹp ở khung thời gian nhỏ.",
  "Tính toán cho thật kĩ mức rủi ro cho phép.",
  "Phải có chiến lược rõ ràng trước khi vào lệnh."
];

export default function ConditionForEnteringATradePage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Quá trình thực hiện lệnh giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Bộ tiêu chí vào lệnh giao dịch:
          </div>
          <div className="space-y-2">
            {conditionForEnteringATrade.map((item, idx) => (
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
