"use client";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const PTKT = [
  {
    title: "Cập nhật tình hình thị trường chart BTC ngày 21-03-2025:",
    content: [
      "Khung 1M => RSI cắt qua TBN, sắp chạm tới TBC, xu hướng bó sát 2 ĐTB, đo fibo vẫn giữ cấu trúc 0.5, sóng tăng đi được khoảng 80% HT.",
      "Khung 1W => RSI cắt qua 2 DTB, xu hướng tiếp tục mở rộng, đang trong nhịp điều chỉnh, sóng giảm đi được khoảng 25% HT.",
      "Khung D1 => RSI cắt qua 2 DTB, xu hướng tăng, sóng tăng đi được khoảng 20% HT.",
      "Khung H4 => RSI bó sát 2 DTB, thiên về sideway biên độ hẹp.",
      "Khung H1 => RSI giảm, sóng giảm đi được khoảng 80% HT.",
      "DÀI HẠN: Chờ khung W đi gần hết hành trình giảm sẽ phân bổ vốn vào để gom hàng dần.",
      "TRUNG HẠN: Khung D bắt đầu sóng tăng, có thể tham gia nhưng lưu ý đang đi ngược xu hướng khung W, khá nguy hiểm.",
      "NGẮN HẠN: Khung H4 sideway biên độ hẹp nên có thể follow theo chiến lược đánh sóng sideway hoặc ngồi ngoài chơi.",
    ]
  },
  {
    title: "Cập nhật tình hình thị trường chart BTC ngày 20-03-2025:",
    content: [
      "Khung 1M => RSI lưỡng lự, đo fibo vẫn giữ cấu trúc sóng tăng.",
      "Khung 1W => RSI giảm, xu hướng tiếp tục mở rộng.",
      "Khung D1 => RSI bó sát 2 DTB, đã kết thúc hành trình giảm.",
      "Khung H4 => RSI tăng và đang mở rộng, mới chạm vùng 70, bắt đầu có dấu hiệu điều chỉnh.",
      "Khung H1 => RSI tăng, chưa chạm vùng 80 có dấu hiệu điều chỉnh cần chú ý quan sát thêm.",
      "DÀI HẠN: Chờ khung W đi gần hết hành trình giảm sẽ phân bổ vốn vào để gom hàng dần.",
      "TRUNG HẠN: Khung D kết thúc hành trình giảm, có thể tham gia nhưng lưu ý đang đi ngược xu hướng khung W, khá nguy hiểm.",
      "NGẮN HẠN: H4 tăng, có thể chờ nhịp điều chỉnh để tham gia."
    ]
  }
];

export default function StrategyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  return (
    <ContentLayout title="Chiến lược giao dịch">
      <Card className="max-h-[67.5vh] overflow-auto shadow-lg border border-black-200 dark:border-black-700 mb-2">
        <CardHeader>
          <div className="font-bold text-2xl text-black-800 dark:text-white">
            View về đa khung thời gian để nhìn thấy được bức tranh tổng thể thị trường:
          </div>
        </CardHeader>
      </Card>
      {PTKT.map((item, index) => (
        <Card
          key={index}
          className="max-h-[67.5vh] overflow-hidden shadow-lg border border-black-200 dark:border-black-700 mt-1 cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center p-6">
            <span className="font-bold text-lg text-black-800 dark:text-white">
              {item.title}
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
            <CardContent className="p-6 space-y-2 border-t text-black-600 dark:text-white">
              {item.content.map((item, idx) => (
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
