"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const psychologicalMastery = [
  "Hay mở tài khoản ra xem các khoản lời lỗ rồi bị áp lực tâm lý.",
  "Lỗi thấy giá mới di chuyển một đoạn đã vội vàng đóng lệnh bằng cảm xúc.",
  "Lỗi không kiên nhẫn chờ cơ hội vào lệnh đẹp.",
  "Lỗi sợ thua không chịu cắt lỗ, dẫn đến trường hợp thua lỗ lớn và cháy tài khoản.",
  "Lỗi khi thấy dấu hiệu đã bị fail nhưng vẫn cố chấp và kì vọng không chịu cắt lỗ."
];

export default function CommonMistakesInTradingPage() {
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
    <ContentLayout title="Các lỗi thường mắc phải trong giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            Các lỗi thường mắc phải trong giao dịch:
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
