"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";

const psychologicalMastery = [
  "Tiền dùng cho trading và đầu tư phải là tiền nhàn rỗi.",
  "Phải rất giỏi về phân tích kĩ thuật.",
  "Học tập có chiều sâu, nhìn lại bản thân và sửa mình.",
  "Nên tập trung vào một số ít đồng coin và chỉ giao dịch tập trung ở khung H4.",
  "Quản trị vốn, quản trị rủi ro cho thật tốt để khi bấm xác nhận vào lệnh xong thì việc còn lại là của thị trường."
];

export default function PsychologicalMasteryPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Hoàn thiện tâm lý giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Cách hoàn thiện tâm lý giao dịch:
          </div>
          <div className="space-y-2">
            {psychologicalMastery.map((item, idx) => (
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
