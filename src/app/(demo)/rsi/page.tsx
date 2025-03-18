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

const questions1 = [
  "Tức là giá thì tăng mà RSI thì tạo đỉnh thấp dần ( giải thích điều này là khi mà giá tăng mạnh nhưng mà lúc này RSI đi xuống tạo đỉnh thấp dần, chứng tỏ lực mua đã suy yếu, lực bán đã tham gia vào nhiều, thì cần lập tức bỏ chạy.",
  "Lưu ý: Có dấu hiệu phân kì cũng chưa chắc là giá đã giảm, mà giá nó có thể giảm xíu xong nó tăng tiếp rất mạnh. Việc của mình là thấy có dấu hiệu phân kì thì mình biết rằng giá có khả năng điều chỉnh, còn điều chỉnh xong nó có tăng tiếp hay không thì câu chuyện đó tính sau .Nếu thấy RSI điều chỉnh xong và đo fibo thấy vẫn giữ giá tốt thì lại tiếp tục tham gia mua vào"
];
const questions2 = [
  "Có những giai đoạn thị trường sideway, hình thái sẽ rất nhiễu loạn, tín hiệu RSI cũng nhiễu loạn. Thì việc của mình cần view đa khung thời gian để biết được thị trường đang ở giai đoạn nào.",
  "Sideway sẽ có 2 hình thái sideway: Nếu giá sideway ở đáy thì nó thể hiện sự tích lũy của bên mua. Nếu giá sideway ở đỉnh nó thể hiện sự phân phối của bên bán",
  "Trong sideway thì sẽ áp dụng chiến lược giao dịch sideway."
];
const questions3 = [
  "Áp dụng lý thuyết của sóng Eliot thì trong con sóng tăng chính sẽ có những con sóng nhỏ, trong con sóng nhỏ sẽ có những con sóng nhỏ hơn, khung thời gian càng lớn thì cho thấy xu hướng chính càng rõ rệt.",
  "Trong con sóng tăng cũng có thời điểm nó sẽ dừng lại điều chỉnh, sideway rồi mới tăng tiếp. Khi này nếu nhìn ở khung nhỏ hơn thì sẽ khá nhiễu loạn. Việc của mình là khi view khung nhỏ thấy nhiễu loạn thì sẽ bỏ qua và chuyển sang khung lớn hơn, có tín hiệu rõ ràng hơn để follow theo."
];

export default function RSIPage() {
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
    <ContentLayout title="Hoàn thiện tâm lý giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            1. Tín hiệu phân kì là gì ?
          </div>
          <div className="space-y-2">
            {questions1.map((item, idx) => (
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
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700 mt-4">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            2. Tại sao có những lúc giá giảm nhưng RSI thì sideway, giá tăng
            nhưng RSI sideway, giá sideway nhưng RSI giảm ?
          </div>
          <div className="space-y-2">
            {questions2.map((item, idx) => (
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
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-gray-200 dark:border-gray-700 mt-4">
        <CardContent className="p-6 space-y-4">
          <div className="font-bold text-xl text-gray-800 dark:text-white">
            3. RSI ở các khung thời gian khác nhau thì cho các tín hiệu chỉ báo
            khác nhau như vậy có phải đồng thuận không ?
          </div>
          <div className="space-y-2">
            {questions3.map((item, idx) => (
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
