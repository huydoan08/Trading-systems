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

const buddhism = [
  {
    title: "Lời Phật dạy",
    content: [
      "Đừng tin tưởng vào một điều gì vì phong văn. Đừng tin tưởng điều gì vì vin vào một tập quán lưu truyền.",
      "Đừng tin tưởng điều gì vì cớ được nhiều nói đi nhắc lại. Đừng tin tưởng điều gì dù là bút tích của thánh nhân.",
      "Đừng tin tưởng điều gì dù thói quen từ lâu khiến ta nhận là điều ấy đúng.",
      "Đừng tin tưởng điều gì do ta tưởng tượng ra lại nghĩ rằng một vị tối linh đã khai thị cho ta.",
      "Đừng tin tưởng bất cứ một điều gì chỉ vin vào uy tín của các thầy dạy các người.",
      "Nhưng chỉ tin tưởng cái gì mà chính các người đã từng trải, kinh nghiệm và nhận là đúng, có lợi cho mình và người khác. Chỉ có cái đó mới là đích tối hậu thăng hoa cho con người và cuộc đời. Các người hãy lấy đó làm chỉ chuẩn."
    ]
  },
  {
    title: "10 Điều chớ vội tin",
    content: [
      "1. Chớ vội tin điều gì, chỉ vì điều đó là truyền thuyết.",
      "2. Chớ vội tin điều gì, chỉ vì điều đó thuộc về truyền thống.",
      "3. Chớ vội tin điều gì, chỉ vì điều đó được nhiều người nhắc đến hay tuyên truyền.",
      "4. Chớ vội tin điều gì, chỉ vì điều đó được ghi lại trong sách vở hay kinh điển.",
      "5. Chớ vội tin điều gì, chỉ vì điều đó lý luận siêu hình.",
      "6. Chớ vội tin điều gì, chỉ vì điều đó phù hợp với lập trường của mình.",
      "7. Chớ vội tin điều gì, chỉ vì điều ấy phù hợp với định kiến của mình.",
      "8. Chớ vội tin điều gì, khi điều đó được căn cứ trên những dữ kiện hời hợt.",
      "9. Chớ vội tin điều gì, chỉ vì điều ấy được sức mạnh và quyền uy ủng hộ.",
      "10. Chớ vội tin điều gì, chỉ vì điều ấy được các nhà truyền giáo hay đạo sư của mình tuyên thuyết."
    ]
  }
];

export default function BuddhismPage() {
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
    <ContentLayout title="Pháp đăng thiền tuệ">
      {buddhism.map((bud, index) => (
        <Card
          key={index}
          className="max-h-[67.5vh] overflow-hidden shadow-lg border border-black-200 dark:border-black-700 mt-4 cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center p-6">
            <span className="font-bold text-lg text-black-800 dark:text-white">{bud.title}</span>
            {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <CardContent className="p-6 space-y-2 border-t text-black-700 dark:text-white max-h-[30vh] overflow-auto sm:max-h-none sm:overflow-visible">
              {bud.content.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <Label className="text-black-700 font-semibold dark:text-white">{item}</Label>
                </div>
              ))}
            </CardContent>
          </motion.div>
        </Card>
      ))}
    </ContentLayout>
  );
}
