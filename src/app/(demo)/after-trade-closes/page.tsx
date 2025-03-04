"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

const afterTraderCloses = [
  "Không cố gắng tìm cơ hội vào lệnh ngay sau khi chạm Stoploss.",
  "Ghi chép nhật kí giao dịch một cách tỉ mỉ, cẩn thận, chi tiết.",
  "Quên đi kết quả giao dịch và chỉ giữ lại cho mình bài học."
];

export default function ConditionForEnteringATradePage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Quá trình thực hiện lệnh giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Sau khi lệnh giao dịch đã kết thúc:
          </div>
          <div className="space-y-2">
            {afterTraderCloses.map((item, idx) => (
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
