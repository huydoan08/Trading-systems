"use client";
import { useState, useEffect } from "react";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebaseConfig";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    title: "1.Tín hiệu phân kì là gì ?",
    content: [
      "Tức là giá thì tăng mà RSI thì tạo đỉnh thấp dần ( giải thích điều này là khi mà giá tăng mạnh nhưng mà lúc này RSI đi xuống tạo đỉnh thấp dần, chứng tỏ lực mua đã suy yếu, lực bán đã tham gia vào nhiều, thì cần lập tức bỏ chạy.",
      "Lưu ý: Có dấu hiệu phân kì cũng chưa chắc là giá đã giảm, mà giá nó có thể giảm xíu xong nó tăng tiếp rất mạnh. Việc của mình là thấy có dấu hiệu phân kì thì mình biết rằng giá có khả năng điều chỉnh, còn điều chỉnh xong nó có tăng tiếp hay không thì câu chuyện đó tính sau .Nếu thấy RSI điều chỉnh xong và đo fibo thấy vẫn giữ giá tốt thì lại tiếp tục tham gia mua vào"
    ]
  },
  {
    title:
      "2.RSI ở các khung thời gian khác nhau thì cho các tín hiệu chỉ báo khác nhau như vậy có phải đồng thuận không ?",
    content: [
      "Áp dụng lý thuyết của sóng Eliot thì trong con sóng tăng chính sẽ có những con sóng nhỏ, trong con sóng nhỏ sẽ có những con sóng nhỏ hơn, khung thời gian càng lớn thì cho thấy xu hướng chính càng rõ rệt.",
      "Trong con sóng tăng cũng có thời điểm nó sẽ dừng lại điều chỉnh, sideway rồi mới tăng tiếp. Khi này nếu nhìn ở khung nhỏ hơn thì sẽ khá nhiễu loạn. Việc của mình là khi view khung nhỏ thấy nhiễu loạn thì sẽ bỏ qua và chuyển sang khung lớn hơn, có tín hiệu rõ ràng hơn để follow theo."
    ]
  },
  {
    title:
      "3.Khi nào thì nên đặt lệnh dừng lỗ, khi nào thì không cần đặt lệnh dừng lỗ ?",
    content: [
      "Đặt lệnh dừng lỗ cần tuân thủ tuyệt đối trong một số trường hợp như sau: giao dịch ở khung H4 trở xuống, giao dịch phái sinh.",
      "Lệnh dừng lỗ không cần thiết phải đặt nếu đầu tư trong khung thời gian 1D trở lên, thậm chí có thể áp dụng chiến lược mua DCA khi giá tiếp tục giảm, nhưng phải hiểu thật sự sâu về đầu tư, cũng như vốn phải thật sự sẵn sàng cho dài hạn."
    ]
  },
  {
    title: "4.Có nên giao dịch future hay không?",
    content: [
      "Đối với những người mới chưa có kĩ năng master về trading thì lời khuyên chân thành là không nên, làm sao mà giao dịch spot có được lợi nhuận ổn định trong một thời gian rất là dài rồi thì khi ấy mới cân nhắc tới việc đánh future."
    ]
  },
  {
    title: "5.Có nên đánh Altcoin hay không?",
    content: [
      "Altcoin nó khá là rủi ro nên nếu tham gia thì chỉ dành 1 số vốn nhỏ, và phải tìm hiểu thật kĩ lưỡng về dự án đó trước khi đưa ra quyết định đầu tư, ngoài ra cũng cần xác định xem chu kì thị trường đang ở giai đoạn nào."
    ]
  }
];

export default function RSIPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <ContentLayout title="Hỏi đáp về phân tích kĩ thuật">
      {faqs.map((faq, index) => (
        <Card
          key={index}
          className="max-h-[67.5vh] overflow-hidden shadow-lg border border-black-200 dark:border-black-700 mt-4 cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center p-6">
            <span className="font-bold text-lg text-black-800 dark:text-white">
              {faq.title}
            </span>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              openIndex === index
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <CardContent className="p-6 space-y-2 border-t text-black-600 dark:text-white max-h-[30vh] overflow-auto sm:max-h-none sm:overflow-visible" >
              {faq.content.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="text-black-600 dark:text-white">-</span>
                  <Label className="text-black-700 font-semibold dark:text-white">
                    {item}
                  </Label>
                </div>
              ))}
            </CardContent>
          </motion.div>
        </Card>
      ))}
    </ContentLayout>
  );
}
